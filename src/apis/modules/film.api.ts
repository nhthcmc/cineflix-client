import axios from "axios";

export const filmApi = {
    // uploadFilm: async (data: any) => {
    //     return await axios.post("http://localhost:3000/api/v1/film/upload", data)
    // },
    getFilm: async () => {
        return await axios.get("http://127.0.0.1:3000/api/v1/film/")
    }
}