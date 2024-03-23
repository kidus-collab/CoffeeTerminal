import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4500",
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': '3JH1qk7343fcXDp2uW89Vwlm6sT5tQ0asdfas',
  }
});

export default instance;