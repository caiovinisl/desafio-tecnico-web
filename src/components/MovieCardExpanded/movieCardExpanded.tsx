import React from "react";
import { Card, Badge } from "./styles";

interface ILanguageInterface {
  name: string;
}

interface IGenreInterface {
  id: number;
  name: string;
}

interface Props {
  title: string;
  description: string;
  date: string;
  situation: string;
  language: ILanguageInterface[];
  duration: string;
  budget: string;
  income: string;
  profit: string;
  rate: string;
  image: string;
  genres: IGenreInterface[] | undefined;
}

const MovieCardExpanded: React.FC<Props> = (props) => {
  return (
    <Card>
      <div className="container">
        <div className="header">
          <h1 className="title">{props.title}</h1>
          <p className="date">{props.date}</p>
        </div>
        <div className="inner">
          <div className="content">
            <div className="session">
              <h3>Sinopse</h3>
              <hr />
              <p>{props.description}</p>
            </div>
            <div className="session">
              <h3>Informações</h3>
              <hr />
              <div className="infos">
                <div className="info">
                  <h4>Situação</h4>
                  <p>{props.situation}</p>
                </div>
                <div className="info">
                  <h4>Idioma</h4>
                  {props.language.map((lg: ILanguageInterface) => (
                    <p>{lg.name}</p>
                  ))}
                </div>
                <div className="info">
                  <h4>Duração</h4>
                  <p>{props.duration}</p>
                </div>
                <div className="info">
                  <h4>Orçamento</h4>
                  <p>{props.budget}</p>
                </div>
                <div className="info">
                  <h4>Receita</h4>
                  <p>{props.income}</p>
                </div>
                <div className="info">
                  <h4>Lucro</h4>
                  <p>{props.profit}</p>
                </div>
              </div>
            </div>
            <div className="session">
              <div className="footer">
                <div className="badges">
                  {props.genres == undefined || props.genres == null ? (
                    <p>Sem gênero especificado</p>
                  ) : (
                    props.genres.map((genre) => <Badge>{genre.name}</Badge>)
                  )}
                </div>
                <div className="rating">
                  <h1>{props.rate}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500${props.image}`}
              alt="Cartaz do filme"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCardExpanded;
