import axios from "axios";

const api = axios.create({
  baseURL:  `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/resources`,
});

export default api;
