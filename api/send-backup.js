
export default async function handler(req, res) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!BOT_TOKEN) {
    return res.status(500).json({ error: 'Server: Bot token missing' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, username, backupData } = req.body;

  if (!userId || !backupData) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Construct message
  // Note: Telegram messages have a limit of 4096 chars.
  // If backupData is huge, this might fail or be truncated.
  // Ideally, send as a Document, but that requires FormData handling.
  // For MVP, we split if too large or warn.
  
  let text = `📦 <b>Автоматический Бэкап</b>\n\n`;
  text += `Привет, ${username || 'User'}! Вот твоя копия данных VocabMaster.\n`;
  text += `Сохрани этот код, чтобы восстановить прогресс при необходимости.\n\n`;
  text += `<code>${backupData}</code>`;

  try {
    // If message is too long, we send a simpler version without the code inline
    if (text.length > 4000) {
         text = `📦 <b>Автоматический Бэкап (Ошибка размера)</b>\n\n`;
         text += `Твой файл сохранения стал слишком большим для сообщения.\n`;
         text += `Пожалуйста, зайди в настройки приложения и сделай "Экспорт" вручную.`;
    }

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: userId,
        text: text,
        parse_mode: 'HTML'
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error('Telegram API Error:', result);
      return res.status(500).json({ error: 'Failed to send message', details: result });
    }
  } catch (error) {
    console.error('Server Backup Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
