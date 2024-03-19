import axios from "axios";

export const filmApi = {
    uploadFilm: async (data: any) => {
        return await axios.post("http://localhost:3000/api/v1/film/upload", data)
    },
}