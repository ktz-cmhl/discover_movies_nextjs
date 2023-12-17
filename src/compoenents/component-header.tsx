'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/theater.png";
import {useRouter} from "next/navigation";
import React from "react";

export default function HeaderComponent() {

    const router = useRouter();

    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(debounceTimer);
        const searchTerm = e.target.value.trim();
        debounceTimer = setTimeout(() => {
            searchTerm ? router.push(`/searchMovies?search=${searchTerm}`) : router.push("/");
        }, 1200);
    };

    return (
        <header
            className='flex align-middles bg-cardColor relative flex-row z-750 mb-4 align-middle justify-between p-2 items-center'>
            <div className='flex p-2 items-center'>
                <Link href={"/"} className="inline-flex items-center">
                    <Image className='w-11 h-11 mr-4' width={50} height={50} src={logo} alt='Movie Logo'/>
                    <h2 className='text-center text-2xl text-white justify-self-center'>Discover Movies</h2>
                </Link>
            </div>
            <input className='p-3 w-80 rounded-xl h-10 align-middle justify-self-center'
                   placeholder="Search Movies" type='search'
                   onChange={event => {
                       handleSearchQuery(event)
                   }}/>
        </header>
    )
}
