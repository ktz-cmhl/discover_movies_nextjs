import {SearchMoviesApi} from "@/app/api/moviesApi";
import PaginationComponent from "@/compoenents/component_pagination";
import ComponentMovieGrid from "@/compoenents/component_movie_grid";

type Props = {
    searchParams?: {
        search: string;
        page?: number;
    };
};
export default async function SearchMovies({searchParams}: Props) {

    let totalPages = 0;

    async function getMovies() {
        try {
            const res = await SearchMoviesApi.GetAll(searchParams?.search!, searchParams?.page || 1)
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

    const data = await getMovies()

    return (
        <div className='bg-backgroundColor mb-4'>
            <div className='max-w-screen-xl mx-auto'>
                <PaginationComponent currentPage={searchParams?.page || 1}
                                     type={"SEARCH"}
                                     query={searchParams?.search || ''}
                                     totalPage={totalPages}/>
                <ComponentMovieGrid movieList={data}/>
            </div>
        </div>
    )
}
