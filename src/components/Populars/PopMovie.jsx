import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MdOutlineLiveTv } from "react-icons/md";

import cover from "../../../public/assets/images/popular-movies/movie1_cover.jpg";

const PopMovie = () => {
  let { id } = useParams();
  let [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    try {
      let data = await fetch(`http://localhost:1000/movies/${id}`);
      let res = await data.json();
      setMovie(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movie, id]);

  return (
    <>
      {movie && (
        <div
          style={
            movie.cover
              ? { backgroundImage: `url(${movie.cover})` }
              : { backgroundImage: `url(${cover})` }
          }
        >
          <div className="relative px-[60px] py-0 max-w-[1440px] mx-auto">
            <div className="flex flex-row pt-[10px] px-0 pb-85px mb-[16px]">
              <div className="">
                <h3 className="font-bold text-[18px] leading-8 mb-[12px]">
                  {movie.title ? movie.title : "پالایشگاه"}
                </h3>
                <p className="font-light text-[12px] leading-3 text-[#a1a1a1] mb-[24px]">
                  {movie.director
                    ? `کارگردان: ${movie.director}`
                    : "کارگردان: مهرداد خوشبخت"}
                </p>
                <div className="mb-[24px] text-[12px]">
                  {movie.score ? (
                    <span className="text-center w-6 text-[#fdc13c] bg-[#ffc43c1f] py-[3px] px-[15px] rounded-[24px] ml-[8px]">
                      {movie.score} IMDb
                    </span>
                  ) : (
                    <span className="text-center w-6 text-[#fdc13c] bg-[#ffc43c1f] py-[3px] px-[15px] rounded-[24px] ml-[8px]">
                      ۴.۶ IMDb
                    </span>
                  )}

                  {movie.genre ? (
                    movie.genre.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="text-center ml-2 min-w-[50px] py-[3px] px-[15px] bg-[#282828] rounded-[24px]"
                        >
                          {item}
                        </span>
                      );
                    })
                  ) : (
                    <>
                      {" "}
                      <span className="text-center ml-2 min-w-[50px] py-[3px] px-[15px] bg-[#282828] rounded-[24px]">
                        &nbsp; درام &nbsp;
                      </span>
                      <span className="text-center ml-2 min-w-[50px] py-[3px] px-[15px] bg-[#282828] rounded-[24px]">
                        &nbsp; جنگی &nbsp;
                      </span>
                    </>
                  )}
                </div>
                <p className="text-[14px] leading-[26px] max-w-[708px] max-h-[100px] text-white overflow-y-auto truncate mb-[24px] md:block hidden">
                  {movie.description
                    ? movie.description
                    : "در سال ۱۳۵۹ همزمان با جنگ تحمیلی، تعدادی از مهندسین پالایشگاه نفت آبادان در تلاش هستند با امکانات و تجهیزاتی که در دا..."}
                </p>

                <div className="w-[260px] text-center bg-[#1cb561] rounded-[8px] hover:bg-[#17924e] ml-[12px] md:mb-0 mb-8">
                  <a
                    href=""
                    className="block py-[10px] px-[16px] text-[12px] font-ultrathin"
                  >
                    <MdOutlineLiveTv className="inline-block w-[18px] h-[18px] mb-1 ml-2" />
                    <span className="inline-block">خرید اشتراک و تماشا</span>
                  </a>
                </div>

                <p className="text-[10px] leading-[26px] max-w-[708px] max-h-[100px] mt-6 text-white overflow-y-auto truncate mb-[24px] md:block hidden">
                  {movie.info
                    ? movie.info
                    : "بالای ۱۵ سال - یک ساعت و ۴۹ دقیقه - محصول ایران - ۱۴۰۱ - کیفیت HD"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopMovie;
