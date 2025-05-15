import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faLandmark, faMagnifyingGlassPlus, faUtensils, faBurger } from '@fortawesome/free-solid-svg-icons'

function CityDetail({ selectedCity }) {
    return selectedCity == null ? (
        <>
        </>
    ) :
        (
            <>
                <h1 className="ml-6 text-5xl text-gray-700">{selectedCity.nome}<span className="text-3xl"> ({selectedCity.nazione},{selectedCity.continente})</span></h1>
                <img className="mx-auto my-5" src={selectedCity.immaginePrincipale} alt={selectedCity.nome} />

                <div>
                    <h2 className="text-3xl py-5 ml-6 font-semibold">Cosa sapere..</h2>
                    <h3 className="text-md py-5 mx-12">{selectedCity.descrizione}</h3>
                </div>

                <div>
                    <h2 className="text-3xl py-5 ml-6 font-semibold">Cosa Guardare..</h2>
                    {selectedCity.attrazioni.map((el) => {
                        return (
                            <div className="grid grid-cols-3 rounded-lg bg-gray-100 mx-12 py-3 px-2 my-3">
                                <div className="flex ">
                                    <FontAwesomeIcon className='px-6' icon={faLandmark} />
                                    <h1>{el.nome}</h1>
                                </div>

                                <div className="flex ">
                                    <FontAwesomeIcon className='px-6' icon={faMagnifyingGlassPlus} />
                                    <h1>{el.descrizione}</h1>
                                </div>

                                <div className="flex  ">
                                    <FontAwesomeIcon className='px-6' icon={faMapLocationDot} />
                                    <h1>{el.indirizzo}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2 className="text-3xl py-5 ml-6 font-semibold">Cosa mangiare e dove mangiarlo..</h2>
                    {selectedCity.piattiTipici.map((el) => {
                        return (
                            <div className="grid grid-cols-4 rounded-lg bg-gray-100 mx-12 py-3 px-2 my-3">
                                <div className="flex ">
                                    <FontAwesomeIcon icon={faBurger} className='px-4' />
                                    <h1>{el.nome}</h1>
                                </div>

                                <div className="flex ">
                                    <FontAwesomeIcon className='px-4' icon={faMagnifyingGlassPlus} />
                                    <h1>{el.descrizione}</h1>
                                </div>

                                <div className="flex  ">
                                    <FontAwesomeIcon className='px-4' icon={faMapLocationDot} />
                                    <h1>{el.indirizzo}</h1>
                                </div>

                                <div className="flex  ">
                                    <FontAwesomeIcon className='px-4' icon={faUtensils} />
                                    <h1>{el.ristorante}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <h2 className="text-3xl py-5 ml-6 font-semibold">Alcune curiosità..</h2>
                    {selectedCity.curiosita.map((el) => {
                        return (
                            <h4 className="text-lg font-normal mx-12">{el.titolo} - <span className="font-light">{el.curiosita}</span></h4>
                        )
                    })}
                </div>

                <div>
                    <h2 className="text-3xl py-5 ml-6 font-semibold">Alcune immagini..</h2>
                    <div className="grid grid-cols-5 my-5 mx-12">
                        {selectedCity.immagini.map((el) => {
                            return (
                                <>
                                    <div className="flex flex-wrap">
                                        <img src={el.url} className="shadow-lg rounded-md"></img>
                                        <h6 className="shadow-lg rounded-md text-md font-normal mt-4 pt-2 pl-1 mr-10">{el.titolo} - <span className="text-sm font-light">{el.descrizione}</span></h6>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

            </>
        )
}
export default CityDetail