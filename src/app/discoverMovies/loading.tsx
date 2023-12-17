"use client"
import {BounceLoader, ClipLoader, GridLoader} from "react-spinners";

export default function Loading() {
    return (
        <div className='h-[80vh] flex items-center justify-center'>
            <GridLoader color="#eae9e9" loading={true}/>
        </div>
    )
}
