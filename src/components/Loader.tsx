import React from "react";

import Img from "loader.png";

interface LoaderProps {
  inline?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ inline }) => {
  return (
    <div
      className={`container${
        inline ? " pt-10" : " h-screen"
      } flex items-center justify-center`}
    >
      <div className="flex flex-col gap-1 items-center justify-center">
        <img src={Img} className="w-[50px] h-[50px] animate-bounce" alt="" />
        <p>Loading{inline ? " more" : null}...</p>
      </div>
    </div>
  );
};
