# Interview preparation website with AI.


-------
## 🔗 Live Demo
<a href="https://interview-spar.onrender.com/" target="_blank" rel="noopener noreferrer">
  Click here to open for demo
</a>


---  
![Macbook-Air-Iphone-13](https://github.com/rahul8279/Interview-Spar/blob/main/s1.png?raw=true)



---

Interview Spar is an AI-powered web application designed to help users prepare for technical interviews. It generates tailored interview questions and answers based on your role, experience, and focus topics, and provides detailed concept explanations to boost your understanding.

## Features

- **Personalized Interview Sets:** Generate questions and answers specific to your role, experience, and chosen topics.
- **AI-Powered Explanations:** Instantly get beginner-friendly explanations for any question or concept.
- **Session Management:** Save, organize, and revisit your interview practice sessions.
- **Notes & Pinning:** Add personal notes to questions and pin important ones for quick access.
- **Modern UI:** Responsive, user-friendly interface built with React, Tailwind CSS, and DaisyUI.

## Tech Stack

- **Frontend:** React, Vite, Zustand, Tailwind CSS, DaisyUI, React Router, React Hot Toast
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Google Generative AI (Gemini)

## How to Install

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/rahul8279/Interview-Spar.git
    cd Interview-spar
    ```

---


  
![Macbook-Air-Iphone-13](https://github.com/rahul8279/Interview-Spar/blob/main/s2.png?raw=true)



---

![Macbook-Air-Iphone-13](https://github.com/rahul8279/Interview-Spar/blob/main/s3.png?raw=true)

----


![Macbook-Air-Iphone-13](https://github.com/rahul8279/Interview-Spar/blob/main/s4.png?raw=true)



----

![Macbook-Air-Iphone-13](https://github.com/rahul8279/Interview-Spar/blob/main/s5.png?raw=true)



## How to Install

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

    ```bash
   git clone https://github.com/rahul8279/Interview-Spar.git
    cd Interview-spar
    ```

2.  **Install Dependencies:**
    client Folder :

    ```bash
    cd client
    npm install
    ```

    Backend Folder :

    ```bash
    cd server
    npm install
    ```

3.  **Set Up Environment Variables:**

    Configure the following environment variables by creating a .env file in the root of Forntend and Backend Folder:

    client Folder :

    ```bash
    VITE_BACKEND_URL=http://localhost:5000
    ```

    server Folder :

    ```bash
   PORT=5000
DB_URL= MONGODB URL
JWT_SECRET= Enter your JASONWEBTOKEN SECRET
GEMINI_API_KEY=Gemini-api-key
CLIENT_URL=Client URl

    ```

    Replace the values with your specific configurations.

4.  **Run the Application:**

    client Folder :

    ```bash
    npm run dev
    ```

    server Folder :

    ```bash
    npm run dev
    ```

5.  **Open in Your Browser:**

Open `http://localhost:5173` in your web browser.

## Project Structure

    ├── client
    │   ├── src
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── store
    │   │   ├── constant
    │   │   ├── lib
    │   │   ├── App.jsx
    │   │   ├── main.jsx
    │   │   └── index.css
    │   ├── index.html
    │   ├── vite.config.js
    │   ├── package-lock.json
    │   └── package.json
    ├── server
    │   ├── src
    │   │   ├── config
    │   │   ├── model
    │   │   ├── controller
    │   │   ├── routes
    │   │   ├── utlis
    │   │   ├── lib
    │   │   ├── index.js
    │   ├── .env
    │   ├── package-lock.json
    │   └── package.json

## Author

Rahul Singh \
Email: rana827965@gmail.com \
LinkedIn : [https://www.linkedin.com/in/](https://www.linkedin.com/in/rahul-singh-025939359)/







## Thank You
