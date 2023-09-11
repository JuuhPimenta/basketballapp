import axios from "axios";

export const api = axios.create({
    baseURL: "https://adonisjuuh.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})