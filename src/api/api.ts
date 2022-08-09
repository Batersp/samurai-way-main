import axios from "axios";
import {FormValuesType} from "../components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";

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

    follow(id: number) {
        return instance.post(`follow/${id}`, {},
        )
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`,
        )
    }

}


export const profileApi = {

    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: string) {
        return instance.get<string>(`profile/status/` + userId)
    },

    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status/`, { status: status})
    },

    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.post<any>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data: UpdateProfileType) {
        return instance.put<UpdateStatusType>(`profile`, data)
    }

}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`,
        )
    },

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}


type UpdateStatusType = {
    resultCode: number
    messages: string[],
    data: {}
}

export type UpdateProfileType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: {facebook: string, website: string, vk: string, twitter: string, instagram: string, youtube: string,
        github: string,
        mainLink: string}
    userId: number

}