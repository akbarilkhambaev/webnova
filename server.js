require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Настройка CORS (разрешаем только webnovas.uz)
app.use(cors({
    origin: "http://webnovas.uz",
    methods: "POST",
    allowedHeaders: "Content-Type"
}));

// Разрешаем preflight-запросы CORS
app.options("*", cors());

// Разрешаем парсинг JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Настраиваем SMTP Yandex
const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Обработка POST-запроса
app.post("/send", async (req, res) => {
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
        return res.status(400).json({ message: "Заполните все поля" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "akbarilxambaev@yandex.ru",
        subject: "Новое сообщение с сайта",
        text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Сообщение отправлено!" });
    } catch (error) {
        console.error("Ошибка при отправке:", error);
        res.status(500).json({ message: "Ошибка при отправке письма", error: error.toString() });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на порту ${PORT}`);
});
