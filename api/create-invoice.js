
// api/create-invoice.js
// This file assumes you are running a Node.js environment (like Vercel Serverless Functions)

export default async function handler(req, res) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; 
  
  if (!BOT_TOKEN) {
    return res.status(500).json({ error: 'Bot token not configured on server' });
  }

  // Parse body for plan type
  let planType = 'month'; // Default
  try {
      if (req.body && typeof req.body === 'object') {
          // If body is already parsed
          planType = req.body.plan || 'month';
      } else if (req.body) {
          // If body comes as string
          const body = JSON.parse(req.body);
          planType = body.plan || 'month';
      }
  } catch (e) {
      console.warn("Failed to parse body", e);
  }

  let price = 150;
  let label = "1 Month Premium";
  let description = "Доступ ко всем функциям на 30 дней.";

  if (planType === 'year') {
      price = 1000;
      label = "1 Year Access";
      description = "Доступ ко всем функциям на 365 дней (Выгодно).";
  }

  const invoicePayload = {
    title: "VocabMaster Premium",
    description: description,
    payload: `premium_${planType}_${Date.now()}`, 
    provider_token: "", // EMPTY for Telegram Stars!
    currency: "XTR",
    prices: [
      { label: label, amount: price } 
    ]
  };

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/createInvoiceLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoicePayload),
    });

    const data = await response.json();

    if (data.ok) {
      return res.status(200).json({ invoiceLink: data.result });
    } else {
      console.error('Telegram API Error:', data);
      return res.status(500).json({ error: 'Failed to create invoice link', details: data });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
