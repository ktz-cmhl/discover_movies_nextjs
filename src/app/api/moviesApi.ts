import { MovieApi } from './config';
import {MovieResponse} from "@/app/model/MovieResponse";

export const DiscoverMoviesApi = {
    GetAll: async function (page: number) {
        return await MovieApi.get<MovieResponse>(
            `discover/movie?page=${page}&include_adult=false`
        );
    },
};

export const SearchMoviesApi = {
    GetAll: async function (query: string,page: number) {
        return await MovieApi.get<MovieResponse>(
            `search/movie?query=${query}&include_adult=false&page=${page}`
        );
    },
};
