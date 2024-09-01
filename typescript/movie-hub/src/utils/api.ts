import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDY0MDkxYjZkZjllMGVhYzM2YzE2NWVmN2E2Yjg0YyIsInN1YiI6IjY1ZDJmYmZjZGM4NjQ3MDE4NWM3MjBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSPr3aVS82Uo5x8UDaolTgIm8Yn3F_JUFKzMzLriNpI";

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url: string, params?: Object) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        });
        return data;
    } catch (err) {
        return err;
    }
}