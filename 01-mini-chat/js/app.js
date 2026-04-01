const chatForm = document.querySelector(".chat-form");
const messagesCont = document.querySelector(".messages");
const messageInput = document.getElementById("message-input");

let messages = [];

function addMessage(text, type) {
  messages.push({ text: text, type: type });
  saveMessages();
}

function renderMessage() {
  let html = messages
    .map((msg) => {
      return `<div class="message ${msg.type}">${msg.text}</div>`;
    })
    .join("");

  messagesCont.innerHTML = html;
  messagesCont.scrollTop = messagesCont.scrollHeight;
}

function botReply() {
  setTimeout(() => {
    addMessage("Я отримав твоє повідомлення!", "bot");
    renderMessage();
  }, 1000);
}

function saveMessages() {
  localStorage.setItem("chatHistory", JSON.stringify(messages));
}

function loadMessages() {
  const saved = localStorage.getItem("chatHistory");
  if (saved) {
    messages = JSON.parse(saved);
    renderMessage();
  }
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let text = messageInput.value.trim();

  if (text === "") {
    return;
  }

  addMessage(text, "me");
  renderMessage();
  botReply();

  messageInput.value = "";
});
loadMessages();
