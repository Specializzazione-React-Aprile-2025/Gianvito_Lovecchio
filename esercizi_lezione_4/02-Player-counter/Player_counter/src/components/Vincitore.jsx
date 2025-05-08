import React from 'react';

function Vincitore({nomeGiocatore1, nomeGiocatore2, punteggio1, punteggio2}) {
    return (
        <div className="my-20 grid grid-cols-1 justify-center">
            {punteggio1 === punteggio2 ?
                <h2 className='bg-green-400 mx-auto px-20 py-2 font-bold text-xl'> Pareggio </h2> :
                <h2 className='bg-green-400 mx-auto px-20 py-2'>
                    Sta vincendo : {punteggio1 > punteggio2 ?
                        <span className="font-bold text-xl">{nomeGiocatore1}</span> :
                        <span className="font-bold text-xl">{nomeGiocatore2}</span>}
                </h2>
            }
        </div>
    );
}

export default Vincitore;