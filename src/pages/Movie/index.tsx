import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import { MainContainer } from "./styles";
import MovieCardExpanded from "../../components/MovieCardExpanded/movieCardExpanded";
import api from "../../services/api";

interface MovieInterface {
  title: string;
  overview: string;
  release_date: string;
  status: string;
  budget: string;
  revenue: string;
  popularity: number;
  poster_path: string;
}

const Movie: React.FC = () => {
  const [movie, setMovie] = useState<MovieInterface>();
  const [id, setId] = useState(500);

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
  }, []);
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
              language="string"
              duration="string"
              budget={movie.budget}
              income={movie.revenue}
              profit={movie.revenue - movie.budget}
              rate={movie.popularity}
              image={movie.poster_path}
            />
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ue80QwXMRHg"
            ></iframe>
          </>
        )}
      </MainContainer>
    </>
  );
};

export default Movie;
