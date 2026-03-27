import { useState } from "react"


function App() {
  

  const [searchKey, setSearchKey] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchKey(e.target.value);

  }

  const SEARCH_MOVIES_API_KEY = import.meta.env.MOVIE_DB_API_KEY;
  const search_movies_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${SEARCH_MOVIES_API_KEY}&query=`;
  const [filteredMovies, setFIlteredMOvies] = useState([]);


  function GetFilteredMovies(e) {

    e.preventDefault();


    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'BearereyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzViYTgxYjA0ZGYyZGY0MDg1NWJjZTVkNjBiMDdlMCIsIm5iZiI6MTc3NDUxNTUwOS40ODk5OTk4LCJzdWIiOiI2OWM0ZjUzNTMwZjNhZWZkMGRmOWE3ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RDahF9y0LFIEm5YgxwRxeAyBIs-n1PeUJqr5XwQRos0'
      }
    }
  };

 
  fetch(search_movies_endpoint + searchKey, options)
  .then(res => res.json())
  .then((res) => {

    console.log(res);
    const {results} = res;
    setFIlteredMOvies(results)
  })

  .catch(err => console.error(err));
  console.log(filteredMovies);
}
  




  return (
    <>
    <div>
      
      <form onSubmit={GetFilteredMovies}>
        <input type="text" value={searchKey} name="" onChange={handleSearch} />
        <button>Search</button>
      </form>
    </div>

    <div>
      <ul>
        {
          filteredMovies.map((movie) => {
            return(
              <li key={movie.id}>
                {movie.title} {movie.original_title} {movie.original_language} {movie.vote_avarage}
              </li>
            )
          })
        }
      </ul>
    </div>
    </>
  )


export default App
