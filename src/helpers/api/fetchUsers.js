import axios from "axios"
axios.defaults.baseURL = 'https://64afb825c60b8f941af47a83.mockapi.io/api/v1/'

export const fetchUsers = async () => {
    try {
        const response = await axios.get('users')
        return response.data
    } catch (error) {
        console.log(error)
    }
}