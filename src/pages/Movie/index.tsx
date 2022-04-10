import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import { MainContainer } from "./styles";
import MovieCardExpanded from "../../components/MovieCardExpanded/movieCardExpanded";
import api from "../../services/api";
import { useLocation, useParams } from "react-router-dom";
import formatMinutesToHours from "../../utils/formatMinutesToHours";
import { formatPrice } from "../../utils/formatValue";
import formatRate from "../../utils/formatRate";

interface IMovieInterface {
  title: string;
  overview: string;
  release_date: string;
  status: string;
  budget: number;
  revenue: number;
  popularity: number;
  poster_path: string;
  runtime: number;
  // spoken_languages: [];
}

interface ITrailerInterface {
  id: number;
  key: string;
}

const Movie: React.FC = (props) => {
  // const location = useLocation();
  // const { state } = location;
  const [movie, setMovie] = useState<IMovieInterface>();
  const [trailers, setTrailers] = useState<ITrailerInterface[]>([]);

  // const [id, setId] = useState(props.match.params.id);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    api
      .get(`movie/${id}`, {
        params: {
          api_key: "cb3cf1f094b688b01c940f191ca482aa",
          language: "pt-BR",
        },
      })
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch((err) => console.log(err));

    api
      .get(`movie/${id}/videos`, {
        params: {
          api_key: "cb3cf1f094b688b01c940f191ca482aa",
          language: "pt-BR",
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setTrailers(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [movie]);

  return (
    <>
      <Navbar />
      <MainContainer>
        {movie == undefined ? (
          <h1>Este filme não foi encontrado!</h1>
        ) : (
          <>
            <MovieCardExpanded
              title={movie.title}
              description={movie.overview}
              date={movie.release_date}
              situation={movie.status}
              // language={movie.spoken_languages}
              duration={formatMinutesToHours(movie.runtime)}
              budget={formatPrice(movie.budget)}
              income={formatPrice(movie.revenue)}
              profit={formatPrice(movie.revenue - movie.budget)}
              rate={formatRate(movie.popularity)}
              image={movie.poster_path}
            />
          </>
        )}
        {trailers == undefined ? (
          <h1>Este filme não possui trailers!</h1>
        ) : (
          trailers.map((trailer: ITrailerInterface) => (
            <iframe
              key={trailer.id}
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}`}
            ></iframe>
          ))
        )}
      </MainContainer>
    </>
  );
};

export default Movie;
