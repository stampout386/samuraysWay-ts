import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'c5b08a5b-ebd6-4d48-90f0-0ef1c70dffc1'
    }
})

export const usersAPI = {
    userUnfollowRequest(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    userFollowRequest(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    getUsersRequest(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    onChangePageUsersRequest(numberPage: number, pageSize: number) {
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
export const loginAPI = {
    getAuthLoginRequest() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}
export const profileAPI = {
    getProfileRequest(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    }

}