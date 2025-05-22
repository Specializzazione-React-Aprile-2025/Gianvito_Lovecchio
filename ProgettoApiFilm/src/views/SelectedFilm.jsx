import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import FilmDetail from "../components/FilmDetail";
import { PuffLoader } from "react-spinners";

function SelectedFilm() {
    const { filmId } = useParams();

    const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/${filmId}?language=it`);
    
    return (
        loading && <div className="flex justify-center items-center h-[100vh]"><PuffLoader size={100} speedMultiplier={2} /></div>,
        FilmDetail(data)
    );
}

export default SelectedFilm;