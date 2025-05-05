# 🧾 Invoice Form App

A responsive and interactive invoice generator built with **React**, **Vite**, **Formik**, **Yup**, and **React-PDF**. This application features a basic login system, form validation, and PDF upload capabilities — all optimized for performance using Vite.

---

## 🚀 Features

- 🔐 Login system (credentials stored in localStorage)
- 🧮 Dynamic invoice form with validation (Formik + Yup)
- 📄 PDF upload support
- 🎨 Clean, modular UI with reusable components
- ⚡️ Fast build and hot reloading with Vite

---

## 🛠️ Tech Stack

- **React** (with hooks)
- **Vite** (for lightning-fast dev server)
- **Formik** and **Yup** (for form management and validation)
- **React-PDF**
- **CSS Modules**
- **LocalStorage API**

---

## 📁 Folder Structure

Invoice Form/
├── public/
├── src/
│ ├── assets/ # Static assets (images, PDFs, etc.)
│ ├── Components/
│ │ ├── Auth/ # Login component
│ │ ├── Form/ # Invoice form UI
│ │ ├── Header/ # Header and branding
│ │ └── PriceToggle/ # Pricing toggle component
│ ├── App.jsx # Main component
│ ├── App.css # Global styles
│ ├── index.css # Base styles
│ ├── main.jsx # App entry point
│ └── localStorageService.js # Helper for localStorage
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── eslint.config.js
└── README.md # You're reading it!

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/invoice-form.git
cd invoice-form
2. Install Dependencies
npm install
3. Run the App Locally
npm run dev
The app will be available at http://localhost:5173/

🛠 Build for Production
npm run build
Build output will be in the dist/ folder.

📄 PDF Upload Guide
Uploads are restricted to .pdf files.

Preview/handle PDFs using react-pdf after upload (UI is integrated).

✨ Future Improvements (Suggestions)
Add authentication with JWT or Firebase

Persist data with a backend service

Enable PDF generation of invoice preview

Add dark mode toggle

```
