export const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions
) =>
  `You are an AI trained to generate technical questions and answers .
  
  Task:
   - Role: ${role}
   - candidate Experience: ${experience}
    - Topics to focus on: ${topicsToFocus}
    - Write ${numberOfQuestions} interview questions.
    -for each question, provide a detailed answer but beginner-friendly answer.
    - if the answer needs code, provide code snippets in markdown format.
    - keep formatting simple and clear.
    - return a pure JSON array like:
    [
    {
    "question": "Questions here"
    "answer": "answer here"
    },
    ...
    ]
    Important:Do not add extra text . only return valid JSON and answer is only 30 to 40 word.
  `;

export const conceptExplanationPrompt = (question) =>
  `You are an AI trained to generate detailed explanations for technical concepts for interview questions.

    Task:
     - Explain the following interview question and its concept in depth as if you'are teaching a beginner developer:
        - Question: ${question}
        -after the explanation, provide a short and clear title that summarizes the concept for artical or page header.
     - Provide a clear and concise explanation.
     - Use simple language and avoid jargon.
     -keep formatting simple and clear.
     - If applicable, include code examples in markdown format.
     - Return the result as a valid JSON object in the following format:
     {
     
        "title": "Title summarizing the concept",
        "explanation": "explanation here"
        }
    
    Important: Do not add extra text. Only return the json format.
    `;
