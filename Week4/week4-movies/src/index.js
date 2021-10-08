import React from 'react';
import ReactDOM from 'react-dom';

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { Movies } from "./pages/movies";
import { MovieDetails } from "./pages/movie-details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.render(
<BrowserRouter>
  <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/movies/:movieID">
          <MovieDetails />
        </Route>
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="*">
        <h1>404 Page not found</h1>
        </Route>
      </Switch>
  </QueryClientProvider>
</BrowserRouter>
  ,document.querySelector("#root")
);
