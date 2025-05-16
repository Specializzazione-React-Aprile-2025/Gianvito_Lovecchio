import { faArrowRight, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import ButtonCard from './ButtonCard'

function CityCard({ city, setSelectedCity, onChangeFavorite, handleDeleteCity }) {

    return (
        <div className="flex max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-2">
            <img className="w-50 h-21 object-cover" src={city.immaginePrincipale} alt={city.nome} />
            <div className="p-1 h-21 w-40">
                <h3 className="text-sm font-bold text-gray-800">{city.nome}</h3>
                <h6 className="text-sm  text-gray-800">{city.nazione}, {city.continente}</h6>
            </div>
            <div className="flex flex-col justify-between ml-auto ">
                <ButtonCard city={city} onChangeFunction={setSelectedCity} color="green" icon={faArrowRight} />
                <ButtonCard city={city} onChangeFunction={onChangeFavorite} color="blue" icon={faHeart} />
                <ButtonCard city={city} onChangeFunction={handleDeleteCity} color="red" icon={faTrashCan} />
            </div>
        </div>
    )
}

export default CityCard