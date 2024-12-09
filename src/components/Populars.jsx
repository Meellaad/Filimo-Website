import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopMovies from "./Populars/PopMovies";
import PopSeries from "./Populars/PopSeries";

const Populars = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopSeries />}></Route>
        <Route path="/:id" element={<PopSeries />}></Route>
        <Route path="/movies" element={<PopMovies />}></Route>
        <Route path="/movies/:id" element={<PopMovies />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Populars;
