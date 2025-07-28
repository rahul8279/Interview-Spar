import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

import {
  conceptExplanationPrompt,
  questionAnswerPrompt,
} from "../utlis/prompts.js";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Not object

export const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsTofocus, numberOfQuestions } = req.body;
    if (!role || !experience || !topicsTofocus || !numberOfQuestions) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsTofocus,
      numberOfQuestions
    );

    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" }); // or "gemini-pro" if preferred

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    const cleanedText = text
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);
    res.status(200).json({
      message: "Questions generated successfully",
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error generating interview questions:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const generateConceptExplanations = async (req, res) => {
  try {
    const { concept } = req.body;
    if (!concept) {
      return res
        .status(400)
        .json({ message: "Concept is required", success: false });
    }

    const prompt = conceptExplanationPrompt(concept);

    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    const cleanedText = text
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);
    res.status(200).json({
      message: "Concept explanation generated successfully",
      success: true,
      data
    });
  } catch (error) {
    console.error("Error generating concept explanation:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
