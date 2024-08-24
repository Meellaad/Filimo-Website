import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Pops from "../Sliders/Pops/Pops";

import cover from "../../../public/assets/images/popular-series/serie1_cover.jpg";

const PopSerie = () => {
  let { id } = useParams();
  let [serie, setSerie] = useState({});

  const fetchSerie = async () => {
    try {
      let data = await fetch(`https://meellaad.github.io/filimo-json/db.json/series/${id}`);
      let res = await data.json();
      setSerie(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSerie();
  }, [serie, id]);
  return (
    <>
      {serie && (
        <div
          style={
            serie.cover
              ? { backgroundImage: `url(${serie.cover})` }
              : { backgroundImage: `url(${cover})` }
          }
          className=""
        >
          <div className="relative px-[60px] py-0 max-w-[1440px] mx-auto">
            <div className="flex flex-row pt-[10px] px-0 pb-85px mb-[16px]">
              <div className="">
                <h3 className="font-bold text-[18px] leading-8 mb-[12px]">
                  {serie.title ? serie.title : "زخم کاری: انتقام"}
                </h3>
                <p className="font-light text-[12px] leading-3 text-[#a1a1a1] mb-[24px]">
                  {serie.director
                    ? `کارگردان: ${serie.director}`
                    : "کارگردان:‌ محمدحسین مهدویان"}
                </p>
                <div className="mb-[24px] text-[12px]">
                  {serie.genre ? (
                    serie.genre.map((item, index) => {
                      return (
                        <>
                          <span
                            key={index}
                            className="text-center min-w-[50px] py-[3px] px-[15px] bg-[#282828] rounded-[24px] ml-[8px]"
                          >
                            {item}
                          </span>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <span className="text-center min-w-[50px] py-[3px] px-[15px] bg-[#282828] rounded-[24px] ml-[8px]">
                        &nbsp; درام &nbsp;
                      </span>
                      <span className="text-center min-w-[50px] py-[3px] px-[15px] bg-[#282828] rounded-[24px] ml-[8px]">
                        &nbsp; خانوادگی &nbsp;
                      </span>
                    </>
                  )}
                </div>
                <p className="text-[14px] leading-[26px] max-w-[708px] max-h-[100px] text-white overflow-y-auto truncate mb-[24px] md:block hidden">
                  {serie.description
                    ? serie.description
                    : "طلوعی، پانی را تحت فشار قرار می‌دهد تا با مالک مصالحه کند، آن ها سعی دارند به هر ترتیبی که شده پول نروژی‌ها را از مالک پ..."}
                </p>
              </div>
              <div className="absolute top-[10px] md:left-[140px] left-[10px]">
                <img
                  src=""
                  alt=""
                  className="inline-block max-w-[220px] max-h-[190px]"
                />
              </div>
            </div>

            <div className="flex flex-row justify-center items-center overflow-hidden overflow-x-auto px-0 pt-[10px] pb-[85px]">
              <Pops />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopSerie;
