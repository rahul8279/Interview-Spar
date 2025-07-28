import { GoogleGenAI } from "@google/genai";
import {
  conceptExplanationPrompt,
  questionAnswerPrompt,
} from "../utlis/prompts.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    let rawText = response.text;
    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();

    const data = JSON.parse(cleanedText);
    res
      .status(200)
      .json({
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
    const { question } = req.body;
    if (!question) {
      return res
        .status(400)
        .json({ message: "Question is required", success: false });
    }
    const prompt = conceptExplanationPrompt(question);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });
    let rawText = response.text;
    const cleanedText = rawText
      .replace(/^```json\s*/, "")
      .replace(/```$/, "")
      .trim();
    const data = JSON.parse(cleanedText);
    res.status(200).json({
      message: "Concept explanations generated successfully",
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error generating concept explanations:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
