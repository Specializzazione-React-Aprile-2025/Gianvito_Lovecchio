import './App.css'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
import ButtonLimitShow from './components/ButtonLimitShow'
import { useState, useEffect } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [query, setQuery] = useState('?gender=Unknown');

  return (
    <>
      <h1 className="text-center m-9 text-6xl">DragonBall Z Characters</h1>
      <SearchBar input={input} setInput={setInput} setQuery={setQuery} />
      <div className="flex justify-center my-5">
        <h2 className=" ml-5 my-8 mx-10 text-3xl">Mostra solo:</h2>
        <ButtonLimitShow setQuery={setQuery} type="limit" param={10} text="10" />
        <ButtonLimitShow setQuery={setQuery} type="limit" param={20} text="20" />
        <ButtonLimitShow setQuery={setQuery} type="limit" param={40} text="40" />
        <ButtonLimitShow setQuery={setQuery} type="gender" param="Male" text="Uomini" />
        <ButtonLimitShow setQuery={setQuery} type="gender" param="Female" text="Donne" />
        <ButtonLimitShow setQuery={setQuery} type="limit" param={58} text="Mostra Tutti" />
      </div>
      <SearchResult query={query} />

    </>
  )
}

export default App
