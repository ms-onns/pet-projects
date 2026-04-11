const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const rawKey = process.env.GROQ_API_KEY;
const API_KEY = rawKey ? rawKey.trim() : null;

console.log("-----------------------------------------");
if (API_KEY) {
  console.log(`🔒 Ключ GROQ: ЗНАЙДЕНО (Довжина: ${API_KEY.length} символів)`);
} else {
  console.error("❌ Ключ GROQ: ПУСТО! Перевір .env файл!");
}
console.log("-----------------------------------------");

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    console.warn("⚠️ Відхилено: Клієнт надіслав порожній запит.");
    return res
      .status(400)
      .json({ error: "Повідомлення не може бути порожнім. Напишіть щось!" });
  }

  if (!API_KEY) {
    console.error("🔥 КРИТИЧНО: Сервер отримав запит, але API ключ відсутній.");
    return res
      .status(500)
      .json({ error: "Чат тимчасово недоступний через технічні роботи." });
  }

  const url = "https://api.groq.com/openai/v1/chat/completions";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error("❌ Помилка API Groq:", data.error || response.statusText);
      throw new Error("Groq API failure");
    }

    const botReply = data.choices?.[0]?.message?.content;

    if (!botReply) {
      throw new Error("Отримана некоректна структура даних від нейромережі");
    }

    console.log("🤖 Відповідь відправлена клієнту!");

    res.json({
      candidates: [{ content: { parts: [{ text: botReply }] } }],
    });
  } catch (error) {
    console.error("💥 Backend Crash:", error.message);

    let userMessage =
      "Вибачте, сталася внутрішня помилка сервера. Ми вже це лагодимо!";

    if (error.message === "Groq API failure") {
      userMessage =
        "Штучний інтелект зараз перевантажений. Дайте йому хвилинку і спробуйте знову.";
    }

    res.status(500).json({ error: userMessage });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Бекенд ожив на http://localhost:${PORT}`),
);
