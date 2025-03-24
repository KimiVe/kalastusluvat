import axios from "axios"

const getAll = async () => {
    //const response = await axios.get('https://kalastusluvatbackend-production.up.railway.app/licences')
    const response = await axios.get('http://localhost:3000/licences')
    return response.data
}

export default {getAll} 