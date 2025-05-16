function PiattiTipiciItem({input, num}){
    return(
        <>
        <div id="piatti" className="space-y-2">
                    <div className="grid grid-cols-6 gap-4 mb-2">

                        {input({ placeholder: "Nome", attributeArray: "piattiTipici", property: "nome", colSpan: "col-span-2", i: num - 1 })}

                        {input({ placeholder: "Ristorante", attributeArray: "piattiTipici", property: "ristorante", colSpan: "col-span-2",  i: num - 1 })}

                        {input({ placeholder: "Indirizzo", attributeArray: "piattiTipici", property: "indirizzo", colSpan: "col-span-2", i: num - 1 })}

                        {input({ placeholder: "Descrizione", attributeArray: "piattiTipici", property: "descrizione", colSpan: "col-span-6", i: num - 1 })}
                    </div>
                </div>  
        </>
    )
}

export default PiattiTipiciItem 