export default function Home({searchParams,}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {


    return (
        <div>
            <p>Search: {searchParams?.page || "Hello World!"}</p>
        </div>
    )
}
