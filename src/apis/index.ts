import axios from "axios";
import { BASE_URL } from './api';

export const axiosConfig = axios.create({
    baseURL: BASE_URL
})

export * from "./api";