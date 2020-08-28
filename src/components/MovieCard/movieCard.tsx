import React from "react";
import { Card, Badge } from "./styles";

interface Props {
  title: string;
  description: string;
  date: string;
  rate: number;
  image: string;
  // onClick(): any;
}

const MovieCard: React.FC<Props> = (props) => {
  return (
    <Card>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt="Cartaz do filme"
        />
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
            <Badge>Ação</Badge>
            <Badge>Aventura</Badge>
            <Badge>Fantasia</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
