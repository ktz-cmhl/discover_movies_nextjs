"use client"
import ReactPaginate from "react-paginate";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

type DiscoverPropType = {
    type: "DISCOVER";
    totalPage: number;
    currentPage: number;
};

type SearchPropType = {
    type: "SEARCH";
    totalPage: number;
    currentPage: number;
    query: string;
};

type Props = DiscoverPropType | SearchPropType;

export default function PaginationComponent(props: Props) {

    const router = useRouter()

    const [mount, setMount] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setMount(true);
        }
    }, []);

    const useStorageState = (
        key: string,
        initialState: number
    ): [number, (pageNumber: number) => void] => {
        const [pageNumber, setPageNumber] = useState(
            mount ?
                parseInt(localStorage.getItem(key) || '') || initialState : initialState
        );

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(pageNumber));
        }, [key, pageNumber]);

        return [pageNumber, setPageNumber];
    };

    const handlePaginateClick = (e: { selected: number }) => {
        const page = e.selected + 1;
        if (props.type === "DISCOVER") {
            router.push(`/discoverMovies?page=${page}`)
        } else if (props.type === "SEARCH") {
            router.push(`/searchMovies?search=${props.query}&page=${page}`)
        }
    };

    if (mount) {
        return (
            <ReactPaginate pageCount={props.totalPage}
                           onPageChange={handlePaginateClick}
                           disableInitialCallback={true}
                           breakLabel='...'
                           className='flex flex-row rounded-xl p-3 items-center bg-cardColor mr-5 justify-between mt-2 mb-2'
                           breakLinkClassName='w-12 h-12 grid place-content-center bg-white rounded-xl text-center mx-2 text-base text-black'
                           previousLabel={<FontAwesomeIcon icon={faAngleLeft}/>}
                           nextLabel={<FontAwesomeIcon icon={faAngleRight}/>}
                           pageRangeDisplayed={8}
                           initialPage={props.currentPage - 1}
                           previousLinkClassName='w-12 h-12 grid place-content-center bg-white rounded-xl text-center mx-2 text-base text-balck'
                           nextLinkClassName='w-12 h-12 grid place-content-center bg-white rounded-xl text-center mx-2 text-base text-balck'
                           pageLinkClassName='w-12 h-12 grid place-content-center bg-white rounded-xl text-center mx-2 text-base text-black'
                           activeLinkClassName='w-12 h-12 grid place-content-center bg-[#c51536] rounded-xl text-center mx-2 text-base text-white'
            />
        )
    }
}
