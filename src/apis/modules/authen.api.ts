import axios from "axios";

export const authenApi = {
    getToken: async (data: {
        userName: string;
        password: string
    }) => {
        return await axios.post("http://localhost:3000/api/v1/user/get-token", data)
    },
    getData: async (data: {
        token: string;
    }) => {
        return await axios.post("http://localhost:3000/api/v1/user/get-data", data)
    },
    createUser: async (data: any) => {
        return await axios.post("http://localhost:3000/api/v1/user", data)
    },
}