import { useState, useEffect } from 'react';
import { config } from '../config/config';

function SearchResult({ query }) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        //callback che fa la chiamata API al montaggio del componente
        async function fetchApi() {
            const response = await fetch(`${config.url}${query}`)
            const json = await response.json();
            const results = Array.isArray(json) ? json : json.items;
            setCharacters(results);
            console.log(response)
        }
        fetchApi();
    }, [query])

    

    return (

        Array.isArray(characters) && characters.length > 0 ?
            <>
                <h1 className='m-14 font-semibold text-2xl'>Risultati della ricerca:</h1>
                <div className="flex flex-wrap justify-evenly mb-15">
                    {characters.map((character) => (
                        <div className="flex flex-col justify-between items-center text-center  w-60 bg-blue-200 p-4 rounded-lg border-2 border-blue-800 m-3" key={character.id}>

                            <h2 className="text-center font-medium text-2xl">{character.name}</h2>
                            <img className="my-5 mx-auto h-[200px]" src={character.image} alt={`immagine di ${character.name}`} />
                            <h2 className="text-md font-medium text-center mt-3">{character.race}</h2>
                            <h2 className="text-xl font-medium text-center mt-3">Forza: {character.ki}</h2>

                        </div>
                    ))}
                </div>
            </>
            : null
    )
}

export default SearchResult
