import React from "react";
import { Css } from "types/react.types";

type Props = {
  width: number;
  height: number;
};

function TempImage({ height, width }: Props) {
  const style: Css = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className={`bg-gray-300 grid place-items-center rounded-[2rem]`}
      style={style}
    >
      <h1 className="text-gray-500 text-h1 opacity-50">
        {width} X {height}{" "}
      </h1>
    </div>
  );
}

export default TempImage;
