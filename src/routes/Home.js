import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Home() {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  

  // 프로미스를 사용하는 대신에 좀 더 깔끔하고 좋은 방식으로 비동기를 처리하는 방법 : async, await
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    /*
    같은 방식. 더욱 간결함
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    */
    setMovies(json.data.movies)
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>
      {movies.map((item, index) => <Movie key={item.id} id={item.id} coverImg={item.medium_cover_image} title={item.title} summary={item.summary} genres={item.genres} />)}</div>}
    </div>
  );
}

export default Home;