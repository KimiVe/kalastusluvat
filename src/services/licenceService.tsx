import axios from "axios"

const getAll = async () => {
    const response = await axios.get('https://kalastusluvatbackend-production.up.railway.app/licences')
    return response.data
}

export default {getAll} 