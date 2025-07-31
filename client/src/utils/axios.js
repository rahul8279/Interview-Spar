import axios from "axios"
import { Auth_BASE_URL, SESSION_BASE_URL } from "./constant"

export const UseraxiosInstance = axios.create({
    baseURL:Auth_BASE_URL,
    withCredentials:true,
})
export const SessionaxiosInstance = axios.create({
    baseURL: SESSION_BASE_URL,
    withCredentials:true,
})