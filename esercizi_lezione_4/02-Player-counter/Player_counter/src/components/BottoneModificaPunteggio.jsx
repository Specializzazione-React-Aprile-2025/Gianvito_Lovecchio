import React from 'react';

function BottoneModificaPunteggio({onClick, tipo}) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer text-xl mx-auto px-7 py-2 rounded font-bold ${tipo === 'up' ? 'bg-green-300 hover:bg-green-700 shadow-md' : 'bg-red-300 hover:bg-red-500 shadow-md'}`}
        >
            {tipo === 'up' ? '+' : '-'}
        </button>
    );
}

export default BottoneModificaPunteggio;