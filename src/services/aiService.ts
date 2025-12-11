
import { AIExplanation, AIWordDetails } from "../types";

// --- CONFIGURATION ---
const getEnvVar = (key: string): string => {
    const val = (import.meta as any).env?.[key];
    return val || "";
};

// --- TYPES ---
interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

interface OpenAIResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
    error?: {
        message: string;
        type?: string;
    };
}

// --- HELPER: ROBUST JSON PARSER ---
const extractJSON = <T>(text: string): T | null => {
    try {
        // Remove markdown code blocks if present
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        // Remove <think> blocks from DeepSeek R1
        const noThinkText = cleanText.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
        
        const firstBrace = noThinkText.indexOf('{');
        const lastBrace = noThinkText.lastIndexOf('}');
        
        if (firstBrace !== -1 && lastBrace !== -1) {
             const jsonString = noThinkText.substring(firstBrace, lastBrace + 1);
             return JSON.parse(jsonString);
        }
        return JSON.parse(noThinkText);
    } catch (e) {
        console.error("Failed to parse JSON from AI response:", text);
        return null;
    }
};

// --- API CALLER ---
const callUniversalAI = async (messages: ChatMessage[]): Promise<string | null> => {
    
    if (!navigator.onLine) {
        throw new Error("Нет интернета. Проверьте соединение.");
    }

    const model = getEnvVar("VITE_AI_MODEL") || "deepseek-chat";

    // Always use our own serverless proxy to avoid CORS issues on mobile/production
    // The proxy handles the API Key and forwarding to DeepSeek
    const endpoint = '/api/ai-proxy';

    console.log(`🤖 Sending AI Request via Proxy to model: ${model}`);

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: 1.1,
                max_tokens: 2000,
                response_format: { type: "json_object" } 
            }),
        });

        const data: OpenAIResponse = await response.json();

        if (!response.ok) {
            console.error(`AI API Error:`, data);
            throw new Error(data.error?.message || `Ошибка API (${response.status})`);
        }

        const content = data.choices?.[0]?.message?.content;
        
        if (!content) throw new Error("Пустой ответ от сервера.");

        return content;

    } catch (error: any) {
        console.error("AI Request Failed:", error);
        throw new Error(error.message || "Ошибка соединения с AI сервисом.");
    }
};

export const explainWordWithAI = async (term: string, level: string): Promise<AIExplanation | null> => {
  const systemPrompt = `
    You are an expert English tutor for a Russian student.
    Analyze the English word provided.
    
    Output strictly VALID JSON in the following format:
    {
      "alternativeDefinition": "Simple definition in Russian",
      "detailedExplanation": "2-3 sentences explaining meaning and usage nuances in Russian",
      "nuance": "Specific connotation or usage warning (e.g. formal/slang) in Russian",
      "extraExamples": [
         { "en": "Example sentence 1", "ru": "Russian translation 1" },
         { "en": "Example sentence 2", "ru": "Russian translation 2" },
         { "en": "Example sentence 3", "ru": "Russian translation 3" }
      ],
      "collocations": [
         { "en": "Phrase 1", "ru": "Translation 1" },
         { "en": "Phrase 2", "ru": "Translation 2" }
      ],
      "mnemonic": "A short, catchy memory aid or association in Russian"
    }
    
    IMPORTANT: All explanations must be in RUSSIAN. JSON only.
  `;

  const userPrompt = `Word: "${term}" (Level ${level})`;

  try {
    const content = await callUniversalAI([
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
    ]);

    if (!content) return null;
    return extractJSON<AIExplanation>(content);

  } catch (error) {
    console.error("Explain Word Error:", error);
    throw error;
  }
};

export const generateWordDetails = async (term: string): Promise<AIWordDetails | null> => {
  // Placeholder implementation if needed for future features
  return null;
};
