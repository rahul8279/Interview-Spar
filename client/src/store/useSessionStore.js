import { create } from "zustand";
import toast from "react-hot-toast";
import {  SessionaxiosInstance, UseraxiosInstance } from "../utils/axios";

export const useSessionStore = create((set, get) => ({
 allSession : [],
 singleSession : null,
 GetAllSession : async () => {
    try {
        const res = await SessionaxiosInstance.get("/getAllSessions")
        set({allSession : res.data.sessions})
        // console.log(res);
        
        toast.success(res.data.message)
    } catch (error) {
        toast.error(error.response.data.message)
        
    }
 },
 GetSessionByID : async (id) => {
try {
    const res = await SessionaxiosInstance.get(`/getsessionbyid/${id}`)
    console.log(res);
    
    set({singleSession : res.data.session})
    
} catch (error) {
    toast.error(error.message.data.message)
}
 },
 DeleteSession : async () => {
    try {
        const res = await SessionaxiosInstance.delete("")
    } catch (error) {
        toast.error(error.response.data.message)
    }
 }
  
  
}));
