import React, { useState, useEffect } from "react";

import PopHeader from "./PopHeader";
import PopMoviesCards from "./PopMoviesCards";
import PopMovie from "./PopMovie";

const Popmovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      let data = await fetch("https://github.com/Meellaad/filimo-json/blob/main/movies.json");
      let res = await data.json();
      setMovies(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="w-[100%] my-0 mx-auto">
      <div className="">
        <div className="py-0 xl:px-[60px] px-[20px] max-w-[1440px] mx-auto">
          <PopHeader />
          {movies && <PopMoviesCards movies={movies} />}
        </div>

        <PopMovie />
      </div>
    </section>
  );
};

export default Popmovies;
