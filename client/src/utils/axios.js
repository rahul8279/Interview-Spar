import axios from "axios"
import { AI_BASE_URL, Auth_BASE_URL, QUESTION_BASE_URL, SESSION_BASE_URL } from "./constant"

export const UseraxiosInstance = axios.create({
    baseURL:Auth_BASE_URL,
    withCredentials:true,
})
export const SessionaxiosInstance = axios.create({
    baseURL: SESSION_BASE_URL,
    withCredentials:true,
})
export const QuestionsaxiosInstance = axios.create({
    baseURL: QUESTION_BASE_URL,
    withCredentials:true,
})
export const AiaxiosInstance = axios.create({
    baseURL: AI_BASE_URL,
    withCredentials:true,
})