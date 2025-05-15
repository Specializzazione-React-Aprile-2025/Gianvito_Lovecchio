import { useState } from 'react'

function NewCityForm({ addNewCity, citiesLength, setCities, setAddNewCity }) {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setCities(prevCities => [...prevCities, newCity]);
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
        setAddNewCity(false);
    };

    const input = ({ placeholder, attributeArray, property, colSpan, i }) => {
        if (!newCity[attributeArray] || !newCity[attributeArray][i]) return null;
        return (
            <input type="text" placeholder={placeholder} class={`${colSpan} p-2 border rounded w-full`}
                value={newCity[attributeArray][i][property]}
                onChange={(e) => {
                    handleChange(e, attributeArray, property, i);
                }} />
        )
    }
    return addNewCity ? (

        <form class="max-w-5xl mx-auto bg-gray-100 p-6 px-12 rounded shadow space-y-8 my-5" onSubmit={handleSubmit}>
            <h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Aggiungi Nuova Città</h1>

            {/* Info base */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input value={newCity.nome} type="text" name="nome" placeholder="Nome città" class="p-2 border rounded w-full"
                    onChange={(e) => handleChange(e, 'nome')} />
                <input value={newCity.nazione} type="text" name="nazione" placeholder="Nazione" class="p-2 border rounded w-full"
                    onChange={(e) => handleChange(e, 'nazione')} />
                <input value={newCity.continente} type="text" name="continente" placeholder="Continente" class="p-2 border rounded w-full"
                    onChange={(e) => handleChange(e, 'continente')} />
            </div>
            <textarea name="descrizione" placeholder="Descrizione della città" class="w-full border rounded p-2 h-28"
                value={newCity.descrizione} onChange={(e) => handleChange(e, 'descrizione')}></textarea>

            {/* Attrazioni */}
            <div>
                <h2 class="text-xl font-semibold mb-2">Attrazioni</h2>
                <div id="attrazioni" class="space-y-2">
                    <div class="grid grid-cols-14 gap-4 mb-2 items-center">
                        <h4 class="col-span-1 text-gray-600 font-semibold">#1</h4>

                        {input({ placeholder: "Nome", attributeArray: "attrazioni", property: "nome", colSpan: "col-span-3", i: 0 })}

                        {input({ placeholder: "Indirizzo", attributeArray: "attrazioni", property: "indirizzo", colSpan: "col-span-4", i: 0 })}

                        {input({ placeholder: "Descrizione", attributeArray: "attrazioni", property: "descrizione", colSpan: "col-span-6", i: 0 })}
                    </div>
                </div>
            </div>
            <div>
                <div id="attrazioni" class="space-y-2">
                    <div class="grid grid-cols-14 gap-4 mb-2 items-center">
                        <h4 class="col-span-1 text-gray-600 font-semibold">#2</h4>
                        {input({ placeholder: "Nome", attributeArray: "attrazioni", property: "nome", colSpan: "col-span-3", i: 1 })}

                        {input({ placeholder: "Indirizzo", attributeArray: "attrazioni", property: "indirizzo", colSpan: "col-span-4", i: 1 })}

                        {input({ placeholder: "Descrizione", attributeArray: "attrazioni", property: "descrizione", colSpan: "col-span-6", i: 1 })}
                    </div>
                </div>
            </div>

            {/* Piatti Tipici */}
            <div>
                <h2 class="text-xl font-semibold mb-2">Piatti Tipici</h2>
                <div id="piatti" class="space-y-2">
                    <div class="grid grid-cols-6 gap-4 mb-2">

                        {input({ placeholder: "Nome", attributeArray: "piattiTipici", property: "nome", colSpan: "col-span-2", i: 0 })}

                        {input({ placeholder: "Ristorante", attributeArray: "piattiTipici", property: "ristorante", colSpan: "col-span-2",  i: 0 })}

                        {input({ placeholder: "Indirizzo", attributeArray: "piattiTipici", property: "indirizzo", colSpan: "col-span-2", i: 0 })}

                        {input({ placeholder: "Descrizione", attributeArray: "piattiTipici", property: "descrizione", colSpan: "col-span-6", i: 0 })}
                    </div>
                </div>
            </div>

            {/* Curiosità */}

            <div>
                <h2 class="text-xl font-semibold mb-2">Curiosità</h2>
                <div id="curiosita" class="space-y-2">
                    <div class="grid grid-cols-12 gap-4 mb-2 items-center">
                        <h4 class="col-span-1 text-gray-600 font-semibold">#1</h4>
                        {input({ placeholder: "Titolo", attributeArray: "curiosita", property: "titolo", colSpan: "col-span-4", i: 0 })}
                        {input({ placeholder: "Curiosità", attributeArray: "curiosita", property: "curiosita", colSpan: "col-span-7", i: 0 })}
                    </div>
                </div>
            </div>


            <div>
                <div id="curiosita" class="space-y-2">
                    <div class="grid grid-cols-12 gap-4 mb-2 items-center">
                        <h4 class="col-span-1 text-gray-600 font-semibold">#2</h4>
                        {input({ placeholder: "Titolo", attributeArray: "curiosita", property: "titolo", colSpan: "col-span-4", i: 1 })}
                        {input({ placeholder: "Curiosità", attributeArray: "curiosita", property: "curiosita", colSpan: "col-span-7", i: 1 })}
                    </div>
                </div>
            </div>

            <div className="text-center font-blod text-xl">Le immagini verranno generate automaticamente in base alla citta inserita.</div>

            <div class="text-center">
                <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-bold mt-4">
                    Salva Città
                </button>
            </div>
        </form>
    )
        : null
}

export default NewCityForm