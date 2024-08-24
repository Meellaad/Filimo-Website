import React, { useEffect, useState } from "react";

import UserComment from "./Sliders/Comments/UserComment";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      let data = await fetch("https://meellaad.github.io/filimo-json/comments.json");
      let res = await data.json();
      setComments(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section>
      <div className="py-16">
        <div className="py-0 xl:px-[60px] md:px-[20px] px-[10px] max-w-[1440px] my-0 mx-auto relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[20px] leading-6 text-right text-white">
              نظر کاربران بعد از تماشای فیلیمو
            </h2>
          </div>

          <div>{comments && <UserComment comments={comments} />}</div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
