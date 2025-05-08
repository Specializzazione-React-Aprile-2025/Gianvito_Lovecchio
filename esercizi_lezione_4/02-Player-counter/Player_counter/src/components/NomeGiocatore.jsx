import React from 'react';

function NomeGiocatore({ nome, numero, colore}){
    return(
        <h2 className={`m-10 mx-auto px-4 px-12 py-2 text-lg bg-${colore}-300`}>
            Giocatore {numero}: 
            <span className={'font-bold'}> {nome}</span></h2>
    )

}

export default NomeGiocatore;