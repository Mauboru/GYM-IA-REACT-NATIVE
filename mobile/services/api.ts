import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.20.3.188:3333"
})