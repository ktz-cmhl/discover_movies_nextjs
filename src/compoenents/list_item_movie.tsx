'use client'
import placeholder from '../../public/movie-svgrepo-com.svg';
import {Rating} from "react-simple-star-rating";
import Image from "next/image";
import { rgbDataURL } from "@/utils/shared";

interface ListItemProps {
    movieId: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

export default function ListItem({title, poster_path, vote_average, movieId,}: ListItemProps) {
    return (
        <div
            onClick={() => {
                console.log(`${movieId} clicked`);
            }}
            className='w-56 mt-4 bg-cardColor rounded-lg flex flex-col'>
            <Image
                className="w-full h-10/12 rounded-t-lg cursor-pointer bg-cover"
                src={
                    poster_path === null
                        ? placeholder
                        : `https://image.tmdb.org/t/p/original/${poster_path}`
                }
                alt={title}
                height={360}
                width={240}
                placeholder='blur'
                blurDataURL={rgbDataURL(256, 256, 256)}/>
            <p className="break-words text-lg text-gray-300 truncate p-2 font-nova-square">{title}</p>
            <Rating
                className="mb-4 ml-2"
                initialValue={vote_average / 2}
                allowFraction={true}
                SVGstyle={{'display': 'inline'}}
                size={20}
                fillColor="#c51536"
                readonly={true}
            />
        </div>
    );
}
