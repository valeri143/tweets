import axios from "axios"
axios.defaults.baseURL = 'https://64afb825c60b8f941af47a83.mockapi.io/api/v1/'
const PAGE_SIZE = 3;

export const fetchUsersPagination = async (page) => {
    try {
        const response = await axios.get('users', {
            params: {
                completed: false,
                page: page,
                limit: PAGE_SIZE,
            },
            headers: {
                'Content-Type': 'application/json',
              },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
// export const fetchUsersPagination = async (id) => {
//     try {
//         const response = await axios.get(`users/${id}`)
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

