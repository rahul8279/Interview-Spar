import { create } from "zustand";
import toast from "react-hot-toast";
import { SessionaxiosInstance } from "../utils/axios";

export const useSessionStore = create((set, get) => ({
  allSession: [],
  singleSession: null,
  questions: [],
  setSingleSession: (session) => set({ singleSession: session }),
  createSession: async (data, Questions) => {
    try {
      const res = await SessionaxiosInstance.post("/create", {
        ...data,
        questions: Questions,
      });
      const newSession = res?.data?.session;
      const  currentSession = get().allSession;
      set({allSession:[newSession,...currentSession]})
      
      set({ allSession: updatedSessions });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  },
  GetAllSession: async () => {
    try {
      const res = await SessionaxiosInstance.get("/getAllSessions");
      set({ allSession: res.data.sessions });

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  GetSessionByID: async (id) => {
    try {
      const res = await SessionaxiosInstance.get(`/getsessionbyid/${id}`);
      set({ singleSession: res.data.session });
    } catch (error) {
      toast.error(error.message.data.message);
    }
  },
  DeleteSession: async (id) => {
    try {
      const res = await SessionaxiosInstance.delete(`delete/${id}`);
      const updatedSessions = get().allSession.filter(
        (session) => session._id !== id
      );
      set({ allSession: updatedSessions });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
