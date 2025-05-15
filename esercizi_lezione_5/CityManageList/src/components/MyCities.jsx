
function MyCities({ favorite }) {
    return favorite.length === 0 ? null : (
        <div className="flex flex-wrap mx-auto px-4 mb-10 ">
            <h2 className='text-4xl text-zinc-700 my-10 font-semibold'>Preferiti</h2>
            <div className="bg-gray-100 p-3">
                {favorite.map((city) => (
                    <div key={city.id} className="flex max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
                        <img className="w-50 h-20 object-cover" src={city.immaginePrincipale} alt={city.nome} />
                        <div className="p-1 h-20 w-40">
                            <h3 className="text-sm font-bold text-gray-800">{city.nome}</h3>
                            <h6 className="text-sm text-gray-800">{city.nazione}, {city.continente}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default MyCities