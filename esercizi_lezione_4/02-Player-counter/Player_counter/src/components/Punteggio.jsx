import React from 'react';

function Punteggio({punteggio}) {
    return (
        <h2 className={'bg-white shadow-lg mx-27 mt-8 py-2'}>Punteggio: <span className='font-bold text-xl'>{punteggio}</span> </h2>
    );
}

export default Punteggio;