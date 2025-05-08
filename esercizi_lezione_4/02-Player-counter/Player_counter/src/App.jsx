import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottoneModificaPunteggio from './components/BottoneModificaPunteggio';
import NomeGiocatore from './components/NomeGiocatore';
import Punteggio from './components/Punteggio';
import Vincitore from './components/Vincitore';
import Titolo from './components/Titolo';


const punteggio1 = 0;
const punteggio2 = 0;
const nomeGiocatore1 = "Gianvito";
const nomeGiocatore2 = "Fabio";

function App() {
  const [punteggio1, setPunteggio1] = useState(0)
  const [punteggio2, setPunteggio2] = useState(0)

  function upPunteggio1() {
    setPunteggio1(punteggio1 + 1)
  }
  function downPunteggio1() {
    setPunteggio1(punteggio1 - 1)
  }

  function upPunteggio2() {
    setPunteggio2(punteggio2 + 1)
  }
  function downPunteggio2() {
    setPunteggio2(punteggio2 - 1)
  }

  return (
    <>
      <Titolo titolo="Contatore Punteggi in REACT" colore="yellow" intensità="900" />

      <div className='p-10 mt-10'>
        <div className="grid grid-cols-2 justify-evenly">
          <NomeGiocatore nome={nomeGiocatore1} numero="1" colore="cyan" />
          <NomeGiocatore nome={nomeGiocatore2} numero="2" colore="slate" />
        </div>
        <div className="grid grid-cols-4 justify-center">
          <BottoneModificaPunteggio onClick={downPunteggio1} tipo="down" />
          <BottoneModificaPunteggio onClick={upPunteggio1} tipo="up" />
          <BottoneModificaPunteggio onClick={downPunteggio2} tipo="down" />
          <BottoneModificaPunteggio onClick={upPunteggio2} tipo="up" />
        </div>

        <div className='grid grid-cols-2 justify-evenly'>
          <Punteggio punteggio={punteggio1} />
          <Punteggio punteggio={punteggio2} />
        </div>

        <Vincitore nomeGiocatore1={nomeGiocatore1} nomeGiocatore2={nomeGiocatore2} punteggio1={punteggio1} punteggio2={punteggio2} />
      </div>
    </>
  )
}

export default App
