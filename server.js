// server.js
const express = require("express");
const fetch = require("node-fetch"); // Если используете Node.js < 18
const bodyParser = require("body-parser");
require("dotenv").config(); // Чтобы считывать токен из .env

const app = express();
const PORT = process.env.PORT || 3000;

// Эти переменные можете хранить в .env
const BOT_TOKEN = process.env.BOT_TOKEN; // "123456789:ABCDef..."
const CHAT_ID = process.env.CHAT_ID;     // "123456789" или "-10012123123" для каналов

app.use(express.static("")); // или куда выложены ваши статические файлы
app.use(bodyParser.urlencoded({ extended: true }));

// При отправке формы POST на /send -> шлём запрос к Telegram
app.post("/send", async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const text = `New request from site:
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
<b>Email:</b> ${email}`;

    // Вызываем Telegram Bot API
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const params = {
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "HTML",
    };

    // Отправляем POST-запрос к Telegram
    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    if (!tgRes.ok) {
      throw new Error(`Telegram API error: ${tgRes.status}`);
    }

    // Успех
    res.status(200).send("OK");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending Telegram message");
  }
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
