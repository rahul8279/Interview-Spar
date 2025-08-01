import { create } from "zustand";
import { AiaxiosInstance, QuestionsaxiosInstance } from "../utils/axios";

export const useQuestionStore = create((set, get) => ({
  pinnedQuestions: [],
  concept: {},
  openAnswerIndex: null,
  openConceptIndex: null,
  isLoading: false,

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

  fetchExplanation: async (questionText) => {
    try {
      set({ isLoading: true ,openConceptIndex: questionText});
      const res = await AiaxiosInstance.post("/generate-explanations", {
        concept: questionText,
      });
        set({concept: res.data.data });
      
    } catch (err) {
      console.error("Explanation error:", err);
    } finally {
      set({isLoading :false})
    }
  },

  toggleAnswer: (index) => {
    const current = get().openAnswerIndex;
    set({ openAnswerIndex: current === index ? null : index });
  },

  closeConcept: () => set({ openConceptIndex: null }),
}));
