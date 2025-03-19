import axios from "axios"

const getAll = async () => {
    const response = await axios.get('https://kalastusluvatbackend-production.up.railway.app/users')
    return response.data
}

export default {getAll} 