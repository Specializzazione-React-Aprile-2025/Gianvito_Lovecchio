import AttrazioniItem from "./AttrazioniItem"

function InputWrapper({ input, gruppo, numItems }) {
    return (
        <>
            <h2 className="text-xl font-semibold mb-2">{gruppo}</h2>
            {Array.from({ length: numItems }).map((_, i) => (
                <AttrazioniItem key={i} num={i + 1} input={input} />
            ))}
        </>
    )
}

export default InputWrapper