import posterPlaceholder from "../../../public/movie-svgrepo-com.svg"
import {Genre} from "@/app/model/DetailResponse";
import {DiscoverMoviesApi, MovieDetailApi} from "@/app/api/moviesApi";
import Image from "next/image";
import placeholder from "../../../public/movie-svgrepo-com.svg";
import {rgbDataURL} from "@/utils/shared";

type Props = {
    searchParams: {
        movieId: string;
    };
};
export default async function DetailView({searchParams}: Props) {

    async function getMovies() {
        try {
            const res = await MovieDetailApi.GetAll(searchParams?.movieId)
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    const movieDetail = await getMovies();

    const backdropStyle = {
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        background: `linear-gradient(rgba(33,53,71,.8), rgba(33,53,71,.8)), url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`,
    };
    /*.posterStyle {*/
    /*    width: 200px;*/
    /*    height: 300px;*/
    /*    margin-top: 16px;*/
    /*    margin-left: 16px;*/
    /*    margin-bottom: 16px;*/
    /*    border-radius: 20px;*/
    /*}*/
    return (
        <div className='flex !bg-cover' style={backdropStyle}>
            <div className='max-w-screen-xl m-auto'>
                <div className='flex justify-center flex-row text-justify'>

                    <Image
                        className="h-150 aspect-[1/1.5] rounded-lg mt-4 ml-4 mb-4"
                        src={
                            movieDetail.poster_path === null
                                ? placeholder
                                : `https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`
                        }
                        alt={movieDetail.title || ''}
                        height={180}
                        width={100}
                        placeholder='blur'
                        blurDataURL={rgbDataURL(256, 256, 256)}/>

                    <div className='flex-col w-7/12'>

                        <p className='text-white m-4 w-10/12 text-2xl'><strong>{movieDetail.title}</strong></p>

                        {/*<p className='movieFactsTextStyle'>Release*/}
                        {/*    Date: {movieDetail.release_date != null ? movieDetail.release_date!.toString() : 'Unknown'}</p>*/}

                        <p className='m-4 text-white text-xl w-10/12'>{movieDetail.overview}</p>

                        <ul className='m-4 list-disc flex pl-0 text-xl' title='Genres'>
                            {movieDetail.genres?.map((genre: Genre) => {
                                return (
                                    <li key={genre.id}
                                        className='bg-backgroundColor text-white inline p-2 rounded-xl me-3 text-xl'>{genre.name}</li>
                                )
                            })}

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )

}