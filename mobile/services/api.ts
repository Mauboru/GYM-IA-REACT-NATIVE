import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.20.16.101:3333"
})