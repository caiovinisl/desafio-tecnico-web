import React from "react";
import Navbar from "../../components/Navbar/navbar";
import { MainContainer } from "./styles";
import MovieCard from "../../components/MovieCard/movieCard";

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <MovieCard />
      </MainContainer>
    </>
  );
};

export default Main;
