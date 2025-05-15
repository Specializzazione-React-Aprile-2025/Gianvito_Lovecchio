import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function CityCard({ city, setSelectedCity, onChangeFavorite, handleDeleteCity }) {
    return (
        <>

            <div className="flex max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-2">
                <img className="w-50 h-21 object-cover" src={city.immaginePrincipale} alt={city.nome} />
                <div className="p-1 h-21 w-40">
                    <h3 className="text-sm font-bold text-gray-800">{city.nome}</h3>
                    <h6 className="text-sm  text-gray-800">{city.nazione}, {city.continente}</h6>
                </div>
                <div className="flex flex-col justify-between ml-auto ">
                    <button className="h-7 w-15 ml-auto bg-green-500 hover:bg-green-400 cursor-pointer text-white font-bold px-4 border-b-4 border-green-700 hover:border-green-500 rounded" onClick={() => setSelectedCity(city)}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="h-7 w-15 ml-auto bg-blue-500 hover:bg-blue-400 cursor-pointer text-white font-bold  px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => onChangeFavorite({ city })}>
                        <FontAwesomeIcon icon={faHeart} className='text-sm' />
                    </button>
                    <button className="h-7 w-15 ml-auto bg-red-500 hover:bg-red-400 cursor-pointer text-white font-bold px-4 border-b-4 border-red-700 hover:border-red-500 rounded" 
                    onClick={() => handleDeleteCity({ city })}>
                        <FontAwesomeIcon icon={faTrashCan} className='text-sm items-center' />
                    </button>
                </div>
            </div>

        </>
    )
}

export default CityCard