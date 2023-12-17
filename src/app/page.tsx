import {Suspense} from "react";
import DiscoverMovies from "@/app/discoverMovies/page";
// import the library
import {library} from '@fortawesome/fontawesome-svg-core'

// import your icons
import {fas} from '@fortawesome/free-solid-svg-icons'

export default async function Home({searchParams,}: {
    searchParams?: { [key: string]: number | undefined };
}) {

    return (
        <div className='bg-backgroundColor mb-4'>
            <div className='max-w-screen-xl mx-auto'>
                    <DiscoverMovies/>
            </div>
        </div>
    )
}
library.add(fas)
