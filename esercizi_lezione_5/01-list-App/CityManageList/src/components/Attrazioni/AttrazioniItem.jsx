function AttrazioniItem({ num, input }) {
    return (
            <div className="grid grid-cols-14 gap-4 mb-2 items-center space-y-2">
                <h4 className="col-span-1 text-gray-600 font-semibold">#{num}</h4>

                {input({ placeholder: "Nome", attributeArray: "attrazioni", property: "nome", colSpan: "col-span-3", i: num - 1 })}

                {input({ placeholder: "Indirizzo", attributeArray: "attrazioni", property: "indirizzo", colSpan: "col-span-4", i: num - 1 })}

                {input({ placeholder: "Descrizione", attributeArray: "attrazioni", property: "descrizione", colSpan: "col-span-6", i: num - 1 })}
            </div>
    )
}

export default AttrazioniItem