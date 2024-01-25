import axios from "axios";

const api = axios.create({
    // baseURL: `https://related-profound-owl.ngrok-free.app`
    baseURL: 'http://localhost:5000'
});

export default api;