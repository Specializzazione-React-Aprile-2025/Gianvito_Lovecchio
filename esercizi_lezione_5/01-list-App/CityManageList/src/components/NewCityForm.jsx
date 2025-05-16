import { useState } from 'react'
import AttrazioniWrapper from './Attrazioni/AttrazioniWrapper';
import CuriositàWrapper from './Curiosità/CuriositàWrapper';
import PiattiTipiciWrapper from './PiattiTipici/PiattiTipiciWrapper';

function NewCityForm({ addNewCity, citiesLength, setCities, setAddNewCity }) {

    //stato
    const [newCity, setNewCity] = useState({
        id: citiesLength + 1,
        immaginePrincipale: "https://picsum.photos/500/300",
        nome: "",
        nazione: "",
        continente: "",
        descrizione: "",
        immagini: [
            { url: "https://picsum.photos/201", titolo: "Immagine di esempio1", descrizione: "Immagine di esempio 1 relativa alla città inserita." },
            { url: "https://picsum.photos/202", titolo: "Immagine di esempio2", descrizione: "Immagine di esempio 2 relativa alla città inserita." },
            { url: "https://picsum.photos/203", titolo: "Immagine di esempio3", descrizione: "Immagine di esempio 3 relativa alla città inserita." },
            { url: "https://picsum.photos/204", titolo: "Immagine di esempio4", descrizione: "Immagine di esempio 4 relativa alla città inserita." },
            { url: "https://picsum.photos/205", titolo: "Immagine di esempio5", descrizione: "Immagine di esempio 1 relativa alla città inserita." }
        ],
        attrazioni: [
            { nome: "", indirizzo: "", descrizione: "" },
            { nome: "", indirizzo: "", descrizione: "" }
        ],
        piattiTipici: [
            { nome: "", descrizione: "", ristorante: "", indirizzo: "" }
        ],
        curiosita: [
            { titolo: "", curiosita: "" },
            { titolo: "", curiosita: "" }
        ]
    });

    //funzione per prendere i valori dal form all'input
    const handleChange = (e, attributeArray, property, index = null) => {
        const value = e.target.value;
        if (index !== null) {
            // Caso per gli array di oggetti (come attrazioni, piattiTipici, curiosità)
            const updatedArray = [...newCity[attributeArray]];
            updatedArray[index][property] = value;
            setNewCity({ ...newCity, [attributeArray]: updatedArray });
        } else {
            // Caso per le proprietà semplici
            setNewCity({ ...newCity, [attributeArray]: value });
        }
    };

    //funzione per chreare il nuovo elemento nella lista
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewCity({
            id: citiesLength + 1,
            immaginePrincipale: "https://picsum.photos/550/300",
            nome: "",
            nazione: "",
            continente: "",
            descrizione: "",
            immagini: [
                { url: "https://picsum.photos/201", titolo: "Immagine di esempio1", descrizione: "Immagine di esempio 1 relativa alla città inserita." },
                { url: "https://picsum.photos/202", titolo: "Immagine di esempio2", descrizione: "Immagine di esempio 2 relativa alla città inserita." },
                { url: "https://picsum.photos/203", titolo: "Immagine di esempio3", descrizione: "Immagine di esempio 3 relativa alla città inserita." },
                { url: "https://picsum.photos/204", titolo: "Immagine di esempio4", descrizione: "Immagine di esempio 4 relativa alla città inserita." },
                { url: "https://picsum.photos/205", titolo: "Immagine di esempio5", descrizione: "Immagine di esempio 1 relativa alla città inserita." }
            ],
            attrazioni: [
                { nome: "", indirizzo: "", descrizione: "" },
                { nome: "", indirizzo: "", descrizione: "" }
            ],
            piattiTipici: [
                { nome: "", descrizione: "", ristorante: "", indirizzo: "" }
            ],
            curiosita: [
                { titolo: "", curiosita: "" },
                { titolo: "", curiosita: "" }
            ]
        });
        setCities(prevCities => [...prevCities, newCity]);
        setAddNewCity(false);
    };

    const input = ({ placeholder, attributeArray, property, colSpan, i }) => {
        if (!newCity[attributeArray] || !newCity[attributeArray][i]) return null;
        return (
            <input type="text" placeholder={placeholder} className={`${colSpan} p-2 border rounded w-full`}
                value={newCity[attributeArray][i][property]}
                onChange={(e) => {
                    handleChange(e, attributeArray, property, i);
                }} />
        )
    }

    return addNewCity ? (

        <form className="max-w-5xl mx-auto bg-gray-100 p-6 px-12 rounded shadow space-y-8 my-5" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Aggiungi Nuova Città</h1>

            {/* Info base */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input value={newCity.nome} type="text" name="nome" placeholder="Nome città" className="p-2 border rounded w-full"
                    onChange={(e) => handleChange(e, 'nome')} />
                <input value={newCity.nazione} type="text" name="nazione" placeholder="Nazione" className="p-2 border rounded w-full"
                    onChange={(e) => handleChange(e, 'nazione')} />
                <input value={newCity.continente} type="text" name="continente" placeholder="Continente" className="p-2 border rounded w-full"
                    onChange={(e) => handleChange(e, 'continente')} />
            </div>

            {/* Descrizione */}
            <textarea name="descrizione" placeholder="Descrizione della città" className="w-full border rounded p-2 h-28"
                value={newCity.descrizione} onChange={(e) => handleChange(e, 'descrizione')}></textarea>

            {/* Attrazioni, piatti tipici e curiosità */}
            <AttrazioniWrapper numItems={2} gruppo="Attrazioni" input={input} />
            <PiattiTipiciWrapper numItems={2} gruppo="Curiosità" input={input} />
            <CuriositàWrapper numItems={2} gruppo="Curiosità" input={input} />

            <div className="text-center font-blod text-xl">Le immagini verranno generate automaticamente in base alla citta inserita.</div>

            <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-bold mt-4">
                    Salva Città
                </button>
            </div>
        </form>
    )
        : null
}

export default NewCityForm