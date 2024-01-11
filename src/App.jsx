import { useEffect, useState } from "react";
import Results from "./components/Results";
import "./index.css";
import axios from "axios";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    axios.get(SEARCHAPI + search).then(
      (response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]); // Include 'search' in the dependency array

  useEffect(() => {
    // This effect will run once when the component mounts
    getAllMovies();
  }, []); // Empty dependency array for initial render

  return (
    <>
      <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
        <input
          type="search"
          value={search}
          onChange={changeTheSearch}
          className="w-full border-none border-black text-slate-700 p-4 rounded-xl hover:shadow-xl bg-slate-200"
          placeholder="Search your favorite movies..."
        />
        {movies.length === 0 ? (
          <div className="text-3xl text-center mt-2"> Loading</div>
        ) : (
          <Results movies={movies} />
        )}
      </div>
    </>
  );
}

export default App;
