import { Link } from "react-router";
import useFetch from "../hooks/useFetch";
import { PuffLoader } from "react-spinners";

function Genres() {
    const { data, loading } = useFetch('https://api.themoviedb.org/3/genre/movie/list?language=it');

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-[100vh]">
                    <PuffLoader size={100} speedMultiplier={2} />
                </div>
            ) : (
                <>
                    <h1 className='m-8 text-center text-blue-400 font-bold text-4xl'>Generi</h1>
                    <div className="flex flex-wrap justify-center mx-10 px-6">
                        {data.genres?.map((genre) => (
                            <Link to={`/genere/${genre.id}/${genre.name}`} key={genre.id}>
                                <h2 className="m-4 p-4 px-6 bg-gray-50 hover:bg-gray-100 border border-gray-500 text-center text-blue-400 font-bold text-2xl hover:font-bold hover:text-blue-600 flex items-center justify-center h-15 cursor-pointer">
                                    {genre.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );

}
export default Genres