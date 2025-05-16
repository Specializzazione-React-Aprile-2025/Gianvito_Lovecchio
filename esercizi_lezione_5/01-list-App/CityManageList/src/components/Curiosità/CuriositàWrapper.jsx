import CuriositàItem from "./CuriositàItem"

function CuriositàWrapper({ input, gruppo, numItems }) {
    return (
        <>
            <h2 className="text-xl font-semibold mb-2">{gruppo}</h2>
            {Array.from({ length: numItems }).map((_, i) => (
                <CuriositàItem key={i} num={i + 1} input={input} />
            ))}
        </>
    )
}

export default CuriositàWrapper