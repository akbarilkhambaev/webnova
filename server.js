const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Разрешаем CORS вручную
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ✅ Разрешаем preflight-запросы
app.options('*', (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/send', async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const text = `New request from site:
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
<b>Email:</b> ${email}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = { chat_id: CHAT_ID, text: text, parse_mode: 'HTML' };

    const tgRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!tgRes.ok) {
      throw new Error(`Telegram API error: ${tgRes.status}`);
    }

    res.status(200).json({ message: 'Заявка успешно отправлена!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending Telegram message');
  }
});

// ✅ Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
