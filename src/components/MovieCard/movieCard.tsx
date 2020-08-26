import React from "react";
import { Card } from "./styles";

// import { Container } from './styles';

const MovieCard: React.FC = () => {
  return (
    <Card>
      <div className="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/7/7d/Thor_Ragnarok_poster.jpg/250px-Thor_Ragnarok_poster.jpg"
          alt="Thor"
        />
      </div>
      <div className="container">
        <div className="header">
          <h1>Thor: Ragnarok</h1>
        </div>
        <div className="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
