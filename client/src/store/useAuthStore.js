import { create } from "zustand";
import { persist } from 'zustand/middleware';
import toast from "react-hot-toast";
import { UseraxiosInstance } from "../utils/axios";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      loading: false,
      
      Signup: async (data) => {
        try {
          set({ loading: true });
          const res = await UseraxiosInstance.post("/register", data);
          set({ user: res.data });
          toast.success("Account created successfully");
        } catch (error) {
          toast.error(error.response?.data?.message || "Signup failed");
        } finally {
          set({ loading: false });
        }
      },

      Login: async (data) => {
        try {
          set({ loading: true });
          const res = await UseraxiosInstance.post("/login", data);
          set({ user: res.data });
          toast.success(res.data.message || "Logged in successfully");
        } catch (error) {
          toast.error(error.response?.data?.message || "Login failed");
        } finally {
          set({ loading: false });
        }
      },

      Logout: async () => {
        try {
          set({ user: null });
          toast.success("Logout successful.");
        } catch (error) {
          toast.error(error.response?.data?.message || "Logout failed");
          set({ user: null });
        }
      }
    }),
    {
      name: 'auth-storage', 
  
      partialize: (state) => ({ user: state.user }),
    }
  )
);
