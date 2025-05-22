import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch.jsx';
import FilmCard from '../components/FilmCard.jsx';



function Home() {
    //  const [films, setFilms] = useState([]);
     const { data } = useFetch('https://api.themoviedb.org/3/discover/movie?language=it&page=1&sort_by=popularity.desc');


  

  return (
    <>
      <h1 className='m-8 text-center text-blue-400 font-bold text-4xl'>Progetto API Film</h1>
      <div className='grid grid-cols-5'>
      {
        data.results?.map((film)=> (
          FilmCard({film})
        )
      )
    }
    </div>
    </>
  )
}

export default Home