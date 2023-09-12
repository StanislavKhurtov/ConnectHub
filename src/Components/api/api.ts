import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const userAPI = {
    getUsers: (page = 1, pageSize = 10) => {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            })
    },
    followUser(userId: number) {
        return instance
            .post(`follow/${userId}`)
            .then((response) => response.data);
    },
    unfollowUser(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },
    getProfile(userId: string) {
        return instance
            .get(`profile/${userId}`)

    }

}

export const authAPI = {
    me: () => {
        return instance
            .get(`auth/me`)
    },
}

