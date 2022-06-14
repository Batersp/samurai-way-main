import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'e3f64c95-5af6-4e5f-a0a6-dfda897924eb'
    }
})


export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
            return response.data
        })
    },

    getMe() {
        return instance.get(`auth/me`,
        )
    },

    follow(id: number) {
        return instance.post(`follow/${id}`, {},
        )
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`,
        )
    }
}
