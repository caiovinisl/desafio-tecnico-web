import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Movie from "./pages/Movie";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movie" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
