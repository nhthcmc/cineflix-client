import axios from "axios";
const prefix = "users"

export default {
    register: async function (newUser: any) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/${prefix}`, newUser);
    },
    login: async function (data: any) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/login`, data);
    },
    loginWithGoogle: async function (data: any) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/login/login-with-google`, data);
    },
    decodeToken: async function (token: string) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/token-decode/${token}`);
    },

    findByUserName: async function (username: string) {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/${prefix}?userName=${username}`)
    },
    findByEmail: async function (email: string) {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/${prefix}?email=${email}`)
    },
    findById: async function (userId: number) {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/${userId}`)
    },
    confirmEmail: async function (userId: number) {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/` + userId, {
            emailConfirm: true
        })
    },
    addIp: async function (userId: number, ipList: string) {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/` + userId, {
            ipAccept: ipList
        })
    },
    forgotPassword: async function (userId: number, password: string) {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/` + userId, {
            password
        })
    },
    newPassword: async function (userId: number, newPassword: string) {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/${prefix}/` + userId, {
            password: newPassword
        })
    },
}