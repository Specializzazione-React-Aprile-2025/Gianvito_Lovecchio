function CuriositàItem({ num, input }) {
    return (
            <div className="grid grid-cols-12 gap-4 mb-2 items-center space-y-2">
                <h4 className="col-span-1 text-gray-600 font-semibold">#1</h4>
                {input({ placeholder: "Titolo", attributeArray: "curiosita", property: "titolo", colSpan: "col-span-4", i: num-1 })}
                {input({ placeholder: "Curiosità", attributeArray: "curiosita", property: "curiosita", colSpan: "col-span-7", i: num-1 })}
            </div>
    )
}

export default CuriositàItem