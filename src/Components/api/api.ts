import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const userAPI = {
    getUsers: (page = 1, pageSize = 10) => {
        return instanse.get(`users?page=${page}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    }
}

