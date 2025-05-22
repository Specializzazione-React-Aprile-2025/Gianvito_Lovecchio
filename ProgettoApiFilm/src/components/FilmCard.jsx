import {Link} from 'react-router';

function FilmCard({ film }) {
    return (
        <div className='flex flex-col m-4 p-4 bg-gray-50' key={film.id}>
            <h3 className='text-center font-semibold text-blue-700 text-md h-13'>{film.title}</h3>
            <img className='mx-4' src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />
            {film.overview.length > 0 ? <p className='my-2 text-sm line-clamp-2'>{film.overview}</p> : <p className='block my-auto text-sm line-clamp-2'>Nessuna descrizione disponibile</p>}
            <div className="flex flex-row justify-between">
            <p className='my-2 text-md'>Lingua: <span className='font-semibold'>{film.original_language}</span> </p>
            <Link to={`/film/${film.id}`}>
            <button className="px-2 my-1 text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm text-center cursor-pointer">Scopri...</button>
            </Link>
            </div>
        </div>
    );
}

export default FilmCard;