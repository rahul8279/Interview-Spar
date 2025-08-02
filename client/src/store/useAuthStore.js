import { create } from "zustand";
import toast from "react-hot-toast";
import {  UseraxiosInstance } from "../utils/axios";

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: false,
  Signup : async (data) => {
    try {
      set({ loading: true });
      const res = await UseraxiosInstance.post("/register", data);
      set({ user: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
  Login : async (data) => {
    try {
      set({ loading: true });
      const res = await UseraxiosInstance.post("/login", data);
      set({ user: res.data });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loading: false });
    }
  },
  Logout : async (data) => {
    try {
      const res = await UseraxiosInstance.post("/logout");
      set({ user: null });
      toast.success("Logout successfully.");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
}));
