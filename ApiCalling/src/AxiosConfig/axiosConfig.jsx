import axios from "axios"
const api = axios.create({
        baseURL: 'https://api.freeapi.app/api/v1/kitchen-sink/',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer YOUR_API_KEY',
            },
    })
export default api