import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import { MainContainer } from "./styles";
import MovieCard from "../../components/MovieCard/movieCard";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const Main: React.FC = () => {
  const [movies, setMovies] = useState({ data: [] });
  const [search, setSearch] = useState("");
  const history = useHistory();

  function updateSearch(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    api
      .get("search/movie", {
        params: {
          api_key: "cb3cf1f094b688b01c940f191ca482aa",
          language: "pt-BR",
          query: search,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
        console.log("OS MOVIE" + movies);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <Navbar />
      <MainContainer>
        <form>
          <input
            type="text"
            value={search}
            placeholder="Busque um filme por nome, ano, gênero..."
            onChange={updateSearch}
          />
        </form>
        {movies.data == undefined ? (
          <h1>Nenhum filme encontrado!</h1>
        ) : (
          movies.data.map(
            (movie: {
              title: string;
              overview: string;
              release_date: string;
              popularity: number;
              poster_path: string;
              id: number;
            }) => (
              <>
                <MovieCard
                  title={movie.title}
                  description={movie.overview}
                  date={movie.release_date}
                  rate={movie.popularity}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  // onClick={() => {
                  //   history.push(`/${movie.id}`, { movie });
                  // }}
                />
              </>
            )
          )
        )}
      </MainContainer>
    </>
  );
};

export default Main;
