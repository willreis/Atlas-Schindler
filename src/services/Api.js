import axios from "axios";

const Api = axios.create({
  baseURL: "http://win-29vph3at9e5:90/api/",
  headers: { "Content-type": "application/json" }
});

export default Api;