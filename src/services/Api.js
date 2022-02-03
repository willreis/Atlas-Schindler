import axios from "axios";

const Api = axios.create({
  baseURL: "http://192.168.11.94:90/api",
  headers: { "Content-type": "application/json" }
});

export default Api;