import React, { useEffect, useState } from "react";

import FreeContent from "./Sliders/FreeContent/FreeContent";

const Free = () => {
  const [frees, setFrees] = useState([]);

  const fetchFrees = async () => {
    try {
      let data = await fetch("https://meellaad.github.io/filimo-json/db.json/frees");
      let res = await data.json();
      setFrees(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFrees();
  }, []);

  return (
    <section>
      <div className="py-[64px]">
        <div className="py-0 xl:px-[60px] px-[20px] mx-auto my-0 max-w-[1440px]">
          <div className="mb-[32px]">
            <h2 className="font-bold text-[20px]">محتواهای رایگان</h2>
          </div>
          <div className="py-0 my-0 px-[15px] mx-[-15px]">
            {frees && <FreeContent frees={frees} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free;
