import CityCard from './CityCard';

function HeaderCities({ cities, setSelectedCity, onChangeFavorite, handleDeleteCity }) {
  return (
    <div className="ml-10">
      <h2 className='text-4xl text-zinc-700 my-10 font-semibold'>Tutte le città da visitare</h2>
      <div className="grid grid-cols-3 justify-center mx-auto p-3 mb-10 bg-gray-100">
        {cities.map((city) => {
          return (
            <div key={city.id} className="w-full">
              <CityCard city={city} setSelectedCity={setSelectedCity} onChangeFavorite={onChangeFavorite} handleDeleteCity={handleDeleteCity}/>
            </div>
          )
        })}
      </div>
    </div>

  );
}

export default HeaderCities;