import { create } from "zustand";
import { persist } from "zustand/middleware"; 
import toast from "react-hot-toast";
import { SessionaxiosInstance } from "../utils/axios";

export const useSessionStore = create(
  persist(
    (set, get) => ({
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
          set((state) => ({
            allSession: [newSession, ...state.allSession],
          }));
          toast.success(res.data.message);
        } catch (error) {
          console.log(error);
          toast.error(error.response?.data?.message || "Creation failed");
        }
      },
      GetAllSession: async () => {
        try {
          const res = await SessionaxiosInstance.get("/getAllSessions");
          set({ allSession: res.data.sessions });
        } catch (error) {
          toast.error(error.response?.data?.message || "Could not fetch sessions");
        }
      },
      GetSessionByID: async (id) => {
        try {
          const res = await SessionaxiosInstance.get(`/getsessionbyid/${id}`);
          set({ singleSession: res.data.session });
        } catch (error) {
          // Corrected error handling
          toast.error(error.response?.data?.message || "Could not fetch session");
        }
      },
      DeleteSession: async (id) => {
        try {
          const res = await SessionaxiosInstance.delete(`delete/${id}`);
          set((state) => ({
            allSession: state.allSession.filter((session) => session._id !== id),
          }));
          toast.success(res.data.message);
        } catch (error) {
          toast.error(error.response?.data?.message || "Could not delete session");
        }
      },
    }),
    {
      name: "session-storage",
    }
  )
);