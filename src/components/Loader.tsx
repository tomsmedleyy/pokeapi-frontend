import React from "react";

import Img from "loader.png";

export const Loader: React.FC = () => {
  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="flex flex-col gap-1 items-center justify-center">
        <img src={Img} className="w-[50px] h-[50px] animate-bounce" />
        <p>Loading...</p>
      </div>
    </div>
  );
};
