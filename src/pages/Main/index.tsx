import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import { MainContainer } from "./styles";
import MovieCard from "../../components/MovieCard/movieCard";
import { useHistory, Link } from "react-router-dom";
import api from "../../services/api";
import formatRate from "../../utils/formatRate";

interface IMovieInterface {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  status: string;
  budget: number;
  revenue: number;
  popularity: number;
  poster_path: string;
  runtime: number;
  genres_ids: number[];
}

interface IGenreInterface {
  id: number;
  name: string;
}

const Main: React.FC = () => {
  const [movies, setMovies] = useState<IMovieInterface[]>([]);
  const [genres, setGenres] = useState<IGenreInterface[]>([]);
  const [genreTags, setGenreTags] = useState<IGenreInterface[]>([]);
  const [search, setSearch] = useState("");
  // const history = useHistory();

  function updateSearch(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSearch(event.target.value);
  }

  function getGenres(ids: number[]) {
    if (ids != undefined) {
      genres.forEach((genre) => {
        ids.forEach((id) => {
          if (genre.id == id) {
            genreTags.push(genre);
            console.log(genre);
          }
        });
      });

      return genreTags;
    }
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
      })
      .catch((err) => console.log(err));

    api
      .get("genre/movie/list", {
        params: {
          api_key: "cb3cf1f094b688b01c940f191ca482aa",
          language: "pt-BR",
        },
      })
      .then((response) => {
        console.log(response.data.genres);
        setGenres(response.data.genres);
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
        {movies == undefined || movies == null ? (
          <h1>Nenhum filme encontrado!</h1>
        ) : (
          movies.map((movie: IMovieInterface) => (
            <Link to={`/movie/${movie.id}`}>
              <MovieCard
                key={movie.id}
                title={movie.title}
                description={movie.overview}
                date={movie.release_date}
                rate={formatRate(movie.popularity)}
                image={movie.poster_path}
                genres={getGenres(movie.genres_ids)}
              />
            </Link>
          ))
        )}
      </MainContainer>
    </>
  );
};

export default Main;
