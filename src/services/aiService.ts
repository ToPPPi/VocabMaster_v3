
import { AIExplanation, AIWordDetails } from "../types";

// --- CONFIGURATION ---
const getEnvVar = (key: string): string => {
    const val = (import.meta as any).env[key];
    return val || "";
};

const DEFAULT_BASE_URL = "https://api.deepseek.com"; 
const DEFAULT_MODEL = "deepseek-chat"; 

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
        const cleanText = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
        return JSON.parse(cleanText);
    } catch (e) {
        const match = text.match(/```json([\s\S]*?)```/);
        if (match) {
            try { return JSON.parse(match[1]); } catch(e2) {}
        }
        const firstBrace = text.indexOf('{');
        const lastBrace = text.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) {
             try { return JSON.parse(text.substring(firstBrace, lastBrace + 1)); } catch(e3) {}
        }
    }
    console.error("Failed to parse JSON from AI response:", text);
    return null;
};

// --- API CALLER ---
const callUniversalAI = async (messages: ChatMessage[]): Promise<string | null> => {
    
    if (!navigator.onLine) {
        throw new Error("Нет интернета. Проверьте соединение.");
    }

    const apiKey = getEnvVar("VITE_AI_API_KEY").trim();
    let baseUrl = getEnvVar("VITE_AI_BASE_URL") || DEFAULT_BASE_URL;
    const model = getEnvVar("VITE_AI_MODEL") || DEFAULT_MODEL;

    // --- PROXY LOGIC ---
    // If we are in dev mode OR if we haven't manually set a full URL, try to use the local proxy
    // to avoid CORS issues on localhost.
    if ((import.meta as any).env.DEV && baseUrl === DEFAULT_BASE_URL) {
        console.log(`🔧 Dev Mode: Using Proxy /ai-proxy`);
        baseUrl = '/ai-proxy';
    }

    if (!apiKey) {
        throw new Error("API ключ не найден. Настройте .env.local");
    }

    const cleanBase = baseUrl.replace(/\/+$/, '');
    const endpoint = cleanBase.endsWith('/chat/completions') 
        ? cleanBase 
        : `${cleanBase}/chat/completions`;

    console.log(`🤖 Sending AI Request to: ${endpoint} (Model: ${model})`);

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": window.location.origin,
                "X-Title": "VocabMaster",
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: 1.1,
                max_tokens: 2000,
                response_format: model.includes('reasoner') ? undefined : { type: "json_object" } 
            }),
        });

        if (!response.ok) {
            console.error(`AI API Error Status: ${response.status} ${response.statusText}`);
            const errData = await response.json().catch(() => ({}));
            
            if (response.status === 401) throw new Error("Ошибка ключа API (401). Проверьте баланс.");
            if (response.status === 402) throw new Error(`Недостаточно средств на балансе AI.`);
            if (response.status === 404) throw new Error(`Ошибка адреса API (404).`);

            throw new Error(errData?.error?.message || `Ошибка API (${response.status})`);
        }

        const data: OpenAIResponse = await response.json();
        const content = data.choices?.[0]?.message?.content;
        
        if (!content) throw new Error("Пустой ответ от сервера.");

        return content;

    } catch (error: any) {
        console.error("AI Request Failed:", error);
        const msg = error.message.toLowerCase();
        
        if (msg.includes('failed to fetch')) {
             // More accurate error message for CORS/Network issues
             throw new Error("Ошибка соединения с AI. Если вы в РФ, нужен VPN. Если локально - проверьте CORS.");
        }
        throw error;
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
    
    IMPORTANT: All explanations must be in RUSSIAN. JSON only. No markdown formatting.
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
  const systemPrompt = `
    Provide dictionary details for the English word "${term}".
    Output strictly VALID JSON:
    {
      "transcription": "IPA",
      "translation": "Russian translation",
      "definition": "Definition in English",
      "partOfSpeech": "noun/verb/etc",
      "exampleEn": "Example sentence",
      "exampleRu": "Translation of example"
    }
  `;

  try {
    const content = await callUniversalAI([
        { role: "system", content: systemPrompt },
        { role: "user", content: "Details please." }
    ]);

    if (!content) return null;
    return extractJSON<AIWordDetails>(content);

  } catch (error) {
    console.error("Word Details Error:", error);
    return null;
  }
};
