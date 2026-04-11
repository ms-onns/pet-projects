# Pet Projects (Vanilla JavaScript)

This repository is a collection of small, focused projects built during my learning journey as a Front-End / Full-Stack Developer.  
Each project is designed to practice specific concepts and improve real-world problem-solving skills.

---

## 🧠 Tech Stack

**Core:**

- Vanilla JavaScript (ES6+)
- DOM Manipulation
- Events & User Interaction

**Backend & API:**

- Node.js & Express.js
- REST API Architecture
- Environment Variables (`.env`) for Security

**Async & Data:**

- Fetch API
- Async / Await & Try / Catch
- Web Storage API (`localStorage`)

**Styling:**

- CSS / SCSS (Custom Properties / Variables)
- Flexbox / Grid
- BEM Methodology

---

## 📂 Project Structure

pet-projects/
├── 01-mini-chat/ (Frontend)
├── backend/ (Node.js Server)
└── README.md

---

## 💬 Projects

### 01. Mini Chat (Full-Stack MVP)

A full-stack message system that integrates a custom Node.js backend and a live AI (Groq Llama 3) for automated bot responses, featuring persistent memory and custom UI theming.

#### 🔧 Key Features:

- **Backend Architecture:** Custom Node.js/Express server handling API requests securely.
- **AI Integration:** Real-time AI responses generated via Groq API (Llama 3 model).
- **Security:** API keys are hidden on the server side using `.env` variables.
- **State-driven UI:** Interface rendering based on a data array (State).
- **Persistent Storage:** Chat history and UI preferences saved and loaded using `localStorage`.
- **UI Engineering:** Dark/Light theme toggle switch linked to CSS variables.

#### 🎯 Learning Focus:

- Building a REST API with Node.js and Express.
- Proxying requests to hide sensitive credentials from the client.
- Handling asynchronous JavaScript (`fetch`, `async/await`, error handling across client and server).
- Separation of concerns (Logic vs. UI rendering).

---

## 🚀 Learning Goal

This repository is part of a structured path toward becoming a Full-Stack Developer.  
Each project builds on previous knowledge and introduces new concepts step-by-step.

---

## 🧩 Future Plans

- Introduce user authentication logic.
- Migrate the project architecture to React.

---

## 📌 Notes

- All projects are built **without frameworks** (except Express for the backend) to strengthen core JavaScript skills.
- Focus is on **logic, structure, and clean code**, not just visual design.
