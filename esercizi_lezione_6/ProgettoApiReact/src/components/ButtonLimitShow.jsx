function ButtonLimitShow({text, type, param, setQuery}){
    return(
        <>
        <button 
        onClick={() => setQuery(`?${type}=${param}`)}
        className="w-30 h-10 bg-blue-500 text-white font-medium py-2 mx-2 my-8 rounded cursor-pointer hover:bg-blue-600">
        {text}
        </button>
        </>
    )
}

export default ButtonLimitShow