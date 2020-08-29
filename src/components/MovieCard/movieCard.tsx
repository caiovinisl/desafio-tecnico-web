import React, { useState, useEffect } from "react";
import { Card, Badge } from "./styles";
import api from "../../services/api";

interface IGenreInterface {
  id: number;
  name: string;
}

interface IProps {
  key: number;
  title: string;
  description: string;
  date: string;
  rate: string;
  image: string;
  genres: IGenreInterface[] | undefined;
  // onClick(): void;
}

const MovieCard: React.FC<IProps> = (props) => {
  return (
    <Card>
      {props.image == null ? (
        <></>
      ) : (
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.image}`}
            alt="Cartaz do filme"
          />
        </div>
      )}
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
            {props.genres == undefined || props.genres == null ? (
              <p>Sem gênero especificado</p>
            ) : (
              props.genres.map((genre) => <Badge>{genre.name}</Badge>)
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
