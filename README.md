# Pet Projects (Vanilla JavaScript)

This repository is a collection of small, focused projects built during my learning journey as a Front-End Developer.  
Each project is designed to practice specific concepts and improve real-world problem-solving skills.

---

## 🧠 Tech Stack

**Core:**

- Vanilla JavaScript (ES6+)
- DOM Manipulation
- Events & User Interaction

**Async & Data:**

- Fetch API
- Async / Await & Try / Catch
- REST API Integration
- Web Storage API (`localStorage`)

**Styling:**

- CSS / SCSS (Custom Properties / Variables)
- Flexbox / Grid
- BEM Methodology

---

## 📂 Project Structure

pet-projects/
├── 01-mini-chat/
├── (more projects coming soon)

---

## 💬 Projects

### 01. Mini Chat (MVP)

A state-based message system that integrates a live REST API for automated bot responses, featuring persistent memory and custom UI theming.

#### 🔧 Key Features:

- **State-driven UI:** Interface rendering based on a data array (State).
- **Network Requests:** Real bot responses fetched from the Advice Slip API using `async/await`.
- **Persistent Storage:** Chat history and UI preferences saved and loaded using `localStorage`.
- **UI Engineering:** Dark/Light theme toggle switch linked to CSS variables.
- **Interactive Components:** Custom dropdown (burger) menu and confirmation modals.
- **Auto-scroll:** Automatic camera focus on the latest messages.

#### 🎯 Learning Focus:

- Handling asynchronous JavaScript (`fetch`, `async/await`, error handling).
- Web Storage API (`localStorage`, JSON serialization).
- Separation of concerns (Logic vs. UI rendering).
- Advanced DOM manipulation (toggling classes, dynamic CSS variables).

---

## ➕ How to Add New Projects

When a new project is created, follow this structure:

### 02. Project Name

Short description of the project.

#### 🔧 Key Features:

- Feature 1
- Feature 2
- Feature 3

#### 🎯 Learning Focus:

- What you learned
- What you practiced

---

## 🚀 Learning Goal

This repository is part of a structured path toward becoming a Full-Stack Developer.  
Each project builds on previous knowledge and introduces new concepts step-by-step.

---

## 🧩 Future Plans

- **AI Helper Chat:** Upgrade the current API to a real AI (Google Gemini API) using `POST` requests and authentication headers.
- Introduce user authentication logic.
- Migrate the project architecture to React.

---

## 📌 Notes

- All projects are built **without frameworks** to strengthen core JavaScript skills.
- Focus is on **logic, structure, and clean code**, not just visual design.
- Each project is kept **simple but scalable**.
