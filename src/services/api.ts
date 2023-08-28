import axios from "axios";

export const api = axios.create({
    baseURL: "https://apiadonis2023.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})