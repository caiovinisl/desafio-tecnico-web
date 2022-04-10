import React, { useState, useEffect } from "react";
import { Card, Badge, EmptyImg } from "./styles";
import api from "../../services/api";

interface IProps {
  key: number;
  title: string;
  description: string;
  date: string;
  rate: string;
  image: string | null;
  genres: number[];
  // onClick(): void;
}

interface IGenreInterface {
  id: number;
  name: string;
}

const MovieCard: React.FC<IProps> = (props) => {
  const [genres, setGenres] = useState<IGenreInterface[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <Card>
      <div className="image">
        {props.image == null ? (
          <EmptyImg />
        ) : (

          <img
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt="Cartaz do filme"
          />
        )} 
      </div>
      <div className="container">
        <div className="header">
          <div className="rating">
            <h1>{props.rate}</h1>
          </div>
          <h1 className="title">{props.title}</h1>
        </div>
        <div className="content">
          <p className="date">{props.date}</p>
          <p>{props.description}</p>
          <div className="badges">
            {props.genres == undefined ? (
              <>Sem gênero especificado</>
            ) : (
              props.genres.map((genre) => <Badge>{genre}</Badge>)
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
