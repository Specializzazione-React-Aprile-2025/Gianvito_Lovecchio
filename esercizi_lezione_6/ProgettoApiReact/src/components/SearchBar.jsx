import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function SearchBar({input, setInput, setQuery}) {
    
    const submitFunction = (e) => {
        e.preventDefault()
        setQuery(`?name=${input}`)
    }; 

    return (
        <div className="flex justify-center mt-20">
            <form className="flex w-[500px]" onSubmit={submitFunction}>
                <input
                    type="text"
                    placeholder="Cerca il tuo personaggio..."
                    className="w-full border-2 border-gray-400 py-2 px-4 rounded-l-xl outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white w-20 text-md px-4 py-2 rounded-r-xl hover:bg-blue-600 transition-colors hover:text-xl cursor-pointer"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    )
}

export default SearchBar