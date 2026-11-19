# 🔍 TruthLens – AI-Powered News Verification Platform

**TruthLens** is an AI-powered news verification platform designed to help users analyze news content and identify potentially misleading or false information.

The platform allows users to submit news for AI-powered verification, review analysis reports, manage their verification history, and communicate with the TruthLens team through a contact system.

🌐 **Live Demo:** https://truth-lens-detector.onrender.com

---

## 🚀 Features

### 1. AI News Verification
- Submit news content for AI-powered analysis.
- Get verification results and detailed AI analysis.
- Identify potentially misleading information.
- View previous verification reports.

### 2. User Authentication
- User registration and login.
- JWT-based authentication.
- Protected routes.
- User-specific data and history.

### 3. Verification History
- Automatically access previous verification records.
- View submitted news and AI analysis.
- Search previous verification reports.

### 4. Contact System
- Submit messages through the Contact Us form.
- Automatically populate authenticated user's name and email.
- Store submitted contact messages.
- View previous contact messages in Contact History.

### 5. Responsive UI
- Modern and responsive interface.
- Mobile-friendly navigation.
- Clean and user-friendly design.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API

### AI Integration
- Groq API
- AI-powered news analysis

### Deployment
- GitHub
- Render

---

## 📂 Project Structure

```text
TruthLens/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/
│       ├── api.js
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Renjero/Truth_Lens_Detector.git
```

### 2. Navigate to Project

```bash
cd Truth_Lens_Detector
```

### 3. Install Dependencies

```bash
npm run setup
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
CLIENT_URL=http://localhost:5173
```

Use the environment variable names expected by your backend code. Never commit your actual API keys or secrets.

### 5. Run the Application

Start the backend:

```bash
npm run dev
```

Start the frontend separately:

```bash
cd client
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5001
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get logged-in user |
| POST | `/api/contact` | Submit contact message |
| GET | `/api/contact/history` | Get contact history |
| GET | `/api/history` | Get verification history |
| POST | `/api/groq/verify` | Verify submitted news |

*Protected endpoints require valid authentication.*

---

## 🚀 Deployment

TruthLens is deployed on Render with the React frontend and Express backend integrated into one service.

The root `package.json` contains the following scripts:

```json
{
  "scripts": {
    "setup": "npm install && npm install --prefix client --include=dev && npm run build --prefix client",
    "start": "node server/server.js",
    "dev": "node --watch server/server.js"
  }
}
```

The frontend is built during deployment, and Express serves the production React build.

Production API configuration:

```javascript
const API_URL = "/api";

export default API_URL;
```

Live application:

https://truth-lens-detector.onrender.com

---

## 🔐 Security

- JWT-based authentication.
- Protected API routes.
- Environment variables for sensitive credentials.
- Password handling through the authentication backend.
- CORS configuration for frontend access.

---

## 🎯 Project Objective

The main objective of TruthLens is to make news verification more accessible by using AI technology to analyze submitted news content.

It aims to encourage users to think critically about online information and become more aware of misinformation.

---

## 👨‍💻 Author

**Robin Renjero**

GitHub: https://github.com/Renjero

Project: [TruthLens – News Verification Platform](https://github.com/Renjero/Truth_Lens_Detector)

---

⭐ If you find this project useful, consider giving it a star on GitHub.

**TruthLens – Verify Before You Believe.**
