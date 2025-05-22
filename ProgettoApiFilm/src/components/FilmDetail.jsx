import { img, span } from "motion/react-client";
import { Link } from "react-router";

function FilmDetail(film) {
    return (
        <>
            {console.log(film)}
            <h1 className="mt-5 ml-5 font-bold text-4xl">{film.title} <span className="font-normal text-2xl">{Math.round(film.vote_average)}/10 <span className="text-sm">({film.vote_count})</span> </span></h1>
            <div className="ml-10 my-4">
                {film.genres?.map((genre) => (
                    <Link to={`/genere/${genre.id}/${genre.name}`} key={genre.id}>
                        <span className="mr-2 text-sm py-0.5 px-2 bg-gray-300 text-black rounded-2xl">{genre.name}</span>
                    </Link>
                ))}
            </div>
            <img className='block mx-auto' src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt={film.title} />
            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">Descrizione:</h3>
                {film.overview?.length > 0 ?
                    <p className="font-normal text-md">{film.overview}</p>
                    :
                    <p className="italic text-md text-gray-500">Nessuna descrizione disponibile</p>
                }
            </div>
            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">Durata: </h3>
                <p className="font-normal text-md">{film.runtime} min</p>
            </div>

            {film.production_countries?.length === 1 ? (
                <div className="mx-12 my-4">
                    <h3 className="font-semibold text-2xl">
                        Paese di produzione:{" "}
                        <p className="font-normal text-base">
                            {film.production_countries[0].name}
                        </p>
                    </h3>
                </div>
            ) : (
                <div className="mx-12 my-4">
                    <h3 className="font-semibold text-2xl">Paesi di produzione:</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {film.production_countries?.map((country, index) => (
                            <span key={index} className="font-normal text-base">
                                {index > 0 && "- "}
                                {country.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">Produzione: </h3>
                <div className="flex flex-wrap mt-2">
                    {film.production_companies?.map((company, index) => (
                        <div key={index} className="mx-4">
                            <div className="flex items-center justify-center h-40">
                                {company.logo_path == null ? (
                                    <img src="../src/img/images.jpeg" className="w-30" />
                                ) : (
                                    <img src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt="" className="w-30" />
                                )}
                            </div>
                            <p className="font-normal text-md">{company.name}</p>
                        </div>

                    ))}
                </div>
            </div>

            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">Data di uscita: </h3>
                <p className="font-normal text-md">{film.release_date}</p>
            </div>

            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">Budget: </h3>
                <p className="font-normal text-md">{film.budget} $</p>
            </div>

            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">Incassi: </h3>
                <p className="font-normal text-md">{film.revenue} $</p>
            </div>

            <div className="mx-12 my-4">
                <h3 className="font-semibold text-2xl">IMDB: </h3>
                <p className="font-normal text-md hover:text-blue-600 underline hover:font-bold"><a target="_blank" href={`https://www.imdb.com/it/title/${film.imdb_id}/`}>Link alla pagina di IMDB</a></p>
            </div>
        </>

    );
}

export default FilmDetail;

// https://www.imdb.com/it/title/{film.imdb_id}/