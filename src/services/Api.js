import axios from "axios";

const Api = axios.create({
  baseURL: "http://192.168.11.94:90/api",
});

export default Api;