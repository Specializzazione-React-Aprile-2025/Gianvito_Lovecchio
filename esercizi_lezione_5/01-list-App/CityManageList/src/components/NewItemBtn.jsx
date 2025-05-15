function NewItemBtn({setAddNewCity}) {
    return (
        <>
            <div className="flex justify-center gap-5">
                <button className=" bg-blue-400 hover:bg-blue-600 cursor-pointer text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => setAddNewCity(true)}>
                    Aggiungi Città
                </button>
            </div>
        </>
    )
}

export default NewItemBtn;