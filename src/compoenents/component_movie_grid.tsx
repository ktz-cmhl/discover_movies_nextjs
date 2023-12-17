'use client'
import {Movie} from "@/app/model/MovieResponse";
import {BounceLoader} from "react-spinners";
import {useState} from "react";
import ListItem from "@/compoenents/list_item_movie";

interface GridProps {
    movieList?: Array<Movie> | undefined
}

export default function ComponentMovieGrid({movieList}: GridProps) {

    const [isLoading, setLoading] = useState('false')

    if (movieList != null || !isLoading) {
        return (
            <>
                <div className='grid grid-cols-movieGrid gap-4'>
                    {movieList!.map((movie) => {
                        return (
                            <ListItem
                                key={movie.id}
                                movieId={movie.id}
                                poster_path={movie.poster_path || ""}
                                title={movie.title}
                                vote_average={movie.vote_average || 0}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
}
