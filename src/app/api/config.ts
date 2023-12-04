import axios, {AxiosError, AxiosResponse} from "axios";

export const MovieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {"Content-Type": "application/json",},
});

MovieApi.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTFkM2Y1MGJkZjhmNDZkNGIyZDhkMjA1ZjY1ZTI2YSIsInN1YiI6IjVlMzQ1MWI5NDMyNTBmMDAxOWJmNmVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49xjnf3X3Mz_eeaTP4CPlHFSM15QejkFIcM7hZKacQo";
        console.log("Config: ", config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

MovieApi.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log("Success:", response);
        return response;
    },
    (error: AxiosError) => {
        console.log("Error: ", error);
        return Promise.reject(error);
    }
);
