import axios from "axios"
axios.defaults.baseURL = 'https://64afb825c60b8f941af47a83.mockapi.io/api/v1/'

export const addFollower = async (action, id, followers) => {
    try {
       const response = await axios.put(`users/${id}`, { followers: action === 'add' ? followers + 1 : followers - 1 });
     return response.data; 
        
    } catch (error) {
        console.log(error)
    }
}