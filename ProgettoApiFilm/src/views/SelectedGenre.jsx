import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import FilmCard from "../components/FilmCard.jsx";
import { PuffLoader } from "react-spinners";
import { Link } from "react-router";

function SelectedGenre() {
    const { genreId, genreName } = useParams();

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/discover/movie?language=it&page=1&sort_by=popularity.desc&with_genres=${genreId}`);


    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-[100vh]">
                    <PuffLoader size={100} speedMultiplier={2} />
                </div>
            ) : (
                <>
                    <Link to="/genres">
                        <span className="ms-3 pt-5 pb-1 font-semibold text-blue-700 text-md hover:border-b-1">Tutti i generi</span>
                    </Link>
                    <h1 className="mb-8 text-center text-blue-400 font-bold text-4xl">Film {genreName} </h1>



                    <div className='grid grid-cols-5'>
                        {
                            data.results?.map((film) => (
                                FilmCard({ film })
                            ))
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default SelectedGenre;