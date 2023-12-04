import { MovieApi } from './config';
import {MovieResponse} from "@/app/model/MovieResponse";

export const DiscoverMoviesApi = {
    GetAll: async function (page: number) {
        return await MovieApi.get<MovieResponse>(
            `discover/movie?page=${page}`
        );
    },
};
