const chatForm = document.querySelector(".chat-form");
const messagesCont = document.querySelector(".messages");
const messageInput = document.getElementById("message-input");
const clearBtn = document.getElementById("clear-btn");
const modal = document.getElementById("confirm-modal");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const burgerBtn = document.getElementById("burger-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
const themeSwitch = document.getElementById("theme-switch");

let messages = [];

function addMessage(text, type) {
  messages.push({ text: text, type: type });
  saveMessages();
}

function renderMessage() {
  let html = messages
    .map((msg) => `<div class="message ${msg.type}">${msg.text}</div>`)
    .join("");
  messagesCont.innerHTML = html;
  messagesCont.scrollTop = messagesCont.scrollHeight;
}

// ===================
async function botReply() {
  const lastMessageObject = messages[messages.length - 1];
  const userMessage = lastMessageObject.text;

  try {
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    console.log("ДАНІ ВІД БЕКЕНДУ:", data);

    if (!response.ok || data.error) {
      const errorMsg = data.error || "Невідома помилка сервера.";
      addMessage(`Помилка: ${errorMsg}`, "bot");
      renderMessage();
      return;
    }

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const botText = data.candidates[0].content.parts[0].text;
      addMessage(botText, "bot");
    } else {
      addMessage("Отримано некоректний формат даних від нейромережі.", "bot");
    }
    renderMessage();
  } catch (error) {
    console.error("Frontend error:", error);
    addMessage("Бекенд не відповідає. Перевірте, чи запущено сервер.", "bot");
    renderMessage();
  }
}
// ======================

function saveMessages() {
  localStorage.setItem("chatHistory", JSON.stringify(messages));
}

function loadMessages() {
  const saved = localStorage.getItem("chatHistory");
  if (saved) {
    messages = JSON.parse(saved);
    renderMessage();
  }
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let text = messageInput.value.trim();
  if (text === "") return;

  addMessage(text, "me");
  renderMessage();
  botReply();

  messageInput.value = "";
});

burgerBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
  dropdownMenu.classList.add("hidden");
});

clearBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  dropdownMenu.classList.add("hidden");
});

btnNo.addEventListener("click", () => modal.classList.add("hidden"));

btnYes.addEventListener("click", () => {
  messages = [];
  localStorage.removeItem("chatHistory");
  renderMessage();
  modal.classList.add("hidden");
});

loadMessages();
