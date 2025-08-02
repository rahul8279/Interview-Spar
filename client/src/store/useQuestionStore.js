import { create } from "zustand";
import { AiaxiosInstance, QuestionsaxiosInstance } from "../utils/axios";
import toast from "react-hot-toast";
import { useSessionStore } from "./useSessionStore";

export const useQuestionStore = create((set, get) => ({
  pinnedQuestions: [],
  concept: {},
  openAnswerIndex: null,
  openConceptIndex: null,
  isLoading: false,
  generatedQuestions: [],

  togglePin: async (questionId) => {
    try {
      const res = await QuestionsaxiosInstance.post(
        `/toggle-pin/${questionId}`
      );
      const updated = res.data.question;

      const current = get().pinnedQuestions || [];
      const exists = current.some((q) => q._id === updated._id);

      const newPinned = exists
        ? current.filter((q) => q._id !== updated._id)
        : [...current, updated];

      set({ pinnedQuestions: newPinned });
    } catch (err) {
      console.error("Pinning error:", err);
    }
  },
  GenerateQuestions: async (data) => {
        const { role, experience, topicsTofocus, } = data
    try {
      const res = await AiaxiosInstance.post("/generate-questions", {
        role,
        experience,
        topicsTofocus,
        numberOfQuestions: 10,
      });
      set({ generatedQuestions: res.data.data });
      console.log();
      
    } catch (error) {
      console.log(error);
    }
  },

  fetchExplanation: async (questionText) => {
    try {
      set({ isLoading: true, openConceptIndex: questionText });
      const res = await AiaxiosInstance.post("/generate-explanations", {
        concept: questionText,
      });
      set({ concept: res.data.data });
    } catch (err) {
      console.error("Explanation error:", err);
    } finally {
      set({ isLoading: false });
    }
  },

  toggleAnswer: (index) => {
    const current = get().openAnswerIndex;
    set({ openAnswerIndex: current === index ? null : index });
  },

  closeConcept: () => set({ openConceptIndex: null }),

  AddQuestionsToSession : async(id,questions)  => {
    try {
      const res = await QuestionsaxiosInstance.post("/add-questions",{
        sessionId:id,
         questions:questions
      })
           const addedQuestion = res.data.createsesion; // ✅ single question object

    const { singleSession, setSingleSession } = useSessionStore.getState();

    if (singleSession && singleSession._id === id) {
      const updatedSession = {
        ...singleSession,
        questions: [...(singleSession.questions || []), addedQuestion], // ✅ append new question
      };

      setSingleSession(updatedSession); // ✅ real-time re-render
    }
       
    } catch (error) {
      console.log(error);
      
      toast.error(error.response.data.messsage)
    }
  }
}));
