import {API_URL, moviesEndPoint} from '../../consts'
import axios from 'axios'

export const getMovies = async () => {
    try{
        const response = await axios.get(`${API_URL}${moviesEndPoint}`);
        if(response.data){
            return response;
        }
    } catch(error){
        return{
            hasError: true,
            error
        }
    }
}


export const getMovie = async(movieId) => {
    try{
        const response = await axios.get(`${API_URL}${moviesEndPoint}/${movieId}`);
        if (response.data){
            return response.data;
        };
    } catch(error) {
        return{
            hasError: true,
            error
        };
    };
};
export const createMovie = async data => {
    try {
        const response = await axios.post(
            `${API_URL}${moviesEndPoint}`,
            data
            );
        if (response.data) {
            return response.data;
        } else {
            return {
                hasError: true,
                error: 'No se pudo crear la película'
            }
        }
    } catch (error) {
        return {
            hasError: true,
            error
        };
    };
};


export const updateMovie = async (movieId, data) => {
    try {
        const response = await axios.put(
            `${API_URL}${moviesEndPoint}/${movieId}`,
            data
        );

        if (response.data) {
            return response.data
        };
    } catch (error) {
        return {
            hasError: true,
            error
        }
    }
}

export const deleteMovie = async movieId => {
    try {
        const response = await axios.delete(`${API_URL}${moviesEndPoint}/${movieId}`);

        if (response.data) {
            return response.data;
        };
    } catch (error) {
        return {
            hasError: true,
            error
        };
    };
};