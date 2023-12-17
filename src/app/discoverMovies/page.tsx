import ComponentMovieGrid from "@/compoenents/component-movie-grid";
import {DiscoverMoviesApi, SearchMoviesApi} from "@/app/api/moviesApi";
import {router} from "next/client";
import PaginationComponent from "@/compoenents/component-pagination";

type Props = {
    searchParams?: {
        search?: string;
        page?: number;
    };
};

export default async function DiscoverMovies({searchParams}: Props) {

    let totalPages = 0;

    async function getMovies() {
        try {
            const res = await DiscoverMoviesApi.GetAll(searchParams?.page || 1)
            const movies = res.data;
            if (movies.total_pages == null) {
                totalPages = 0
            } else if (movies.total_pages >= 500) {
                totalPages = 500
            } else if (movies.total_pages < 500) {
                totalPages = movies.total_pages
            }
            return movies.results;
        } catch (error) {
            throw error;
        }
    }

    const data = await getMovies();

    return (
        <div className='bg-backgroundColor mb-4'>
            <div className='max-w-screen-xl mx-auto'>
                <PaginationComponent currentPage={searchParams?.page || 1} totalPage={totalPages} type={"DISCOVER"}/>
                <ComponentMovieGrid movieList={data}/>
            </div>
        </div>
    )

}
