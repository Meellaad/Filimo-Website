import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopMovies from "./Populars/PopMovies";
import PopSeries from "./Populars/PopSeries";

const Populars = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Filimo-Website/" element={<PopSeries />}></Route>
        <Route path="/Filimo-Website/:id" element={<PopSeries />}></Route>
        <Route path="/Filimo-Website/movies" element={<PopMovies />}></Route>
        <Route path="/Filimo-Website/movies/:id" element={<PopMovies />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Populars;
