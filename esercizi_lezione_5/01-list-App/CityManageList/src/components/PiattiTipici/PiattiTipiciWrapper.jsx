import PiattiTipiciItem from "./PiattiTipiciItem";

function PIattiTipiciWrapper({ input, numItems }) {
    return (
        <>
            <h2 className="text-xl font-semibold mb-2">Piatti tipici</h2>
            {Array.from({ length: numItems }).map((_, i) => (
                <PiattiTipiciItem key={i} num={i + 1} input={input} />
            ))}
        </>
    );
}

export default PIattiTipiciWrapper;