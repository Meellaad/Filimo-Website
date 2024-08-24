import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

import PopHeader from "./PopHeader";
import PopSeriesCards from "./PopSeriesCards";
import PopSerie from "./PopSerie";

const PopSeries = () => {
  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
    try {
      let data = await fetch("https://meellaad.github.io/filimo-json/db.json/series");
      let res = await data.json();
      setSeries(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <section className="w-[100%] my-0 mx-auto">
      <div className="">
        <div className="py-0 xl:px-[60px] px-[20px] max-w-[1440px] mx-auto">
          <PopHeader />
          {series && <PopSeriesCards series={series} />}
          {/* className="min-w-[130px] ml-10 relative border-[2px] border-solid scale-[1.1] border-[#ffffffb3] rounded-[10px] */}
        </div>

        <PopSerie />
      </div>
    </section>
  );
};

export default PopSeries;
