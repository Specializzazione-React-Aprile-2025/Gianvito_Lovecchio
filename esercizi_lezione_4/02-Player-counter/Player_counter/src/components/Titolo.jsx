import React from 'react';

function Titolo({titolo, colore, intensità}){
    return(
        <h1 className={`text-center text-5xl text-${colore}-${intensità} font-extrabold`}>{titolo}</h1>
    )
}

export default Titolo;