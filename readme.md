# Interview Spar

Interview Spar is an AI-powered platform to help users prepare for technical interviews. It generates tailored interview questions, beginner-friendly answers, and detailed concept explanations based on your role, experience, and focus topics.

## Features

- Personalized interview question sets
- AI-generated answers and explanations
- Pin and add notes to questions
- Save and organize interview sessions
- User authentication and session management

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, DaisyUI, Zustand, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Google Generative AI

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)
- Google Generative AI API key

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/interview-spar.git
cd interview-spar
```

#### 2. Install dependencies

```sh
cd client
npm install
cd ../server
npm install
```

#### 3. Configure environment variables

Create a `.env` file in the `server` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_generative_ai_key
CLIENT_URL=http://localhost:5173
PORT=3000
```

#### 4. Run the development servers

- **Backend:**

```sh
npm run dev
```

- **Frontend:**

```sh
cd ../client
npm run dev
```

## Usage

- Visit `http://localhost:5173` in your browser.
- Sign up or log in.
- Create a new interview session and get AI-generated questions.
- Explore answers, explanations, and manage your sessions.

## Folder Structure

- `client/` – React frontend
- `server/` – Express backend

## License

MIT

---

Feel free to customize this README for your specific needs!