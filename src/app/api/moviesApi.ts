import {MovieApi} from "@/app/api/config";
import {MovieResponse} from "@/app/model/MovieResponse";
import {DetailResponse} from "@/app/model/DetailResponse";

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

export const MovieDetailApi = {
    GetAll: async function (movieId:string) {
        return await MovieApi.get<DetailResponse>(
            `movie/${movieId}`
        );
    },
};
