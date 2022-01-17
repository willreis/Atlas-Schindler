import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.11.58:90/api/",
});

export default api;