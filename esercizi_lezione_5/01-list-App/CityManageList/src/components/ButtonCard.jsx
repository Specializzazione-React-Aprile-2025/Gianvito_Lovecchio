import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonCard({ city, onChangeFunction, color, icon }) {
    return (
        <button className={`h-7 w-15 ml-auto bg-${color}-500 hover:bg-${color}-400 cursor-pointer text-white font-bold px-4 border-b-4 border-${color}-700 hover:border-${color}-500 rounded`} onClick={() => onChangeFunction({ city })}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default ButtonCard