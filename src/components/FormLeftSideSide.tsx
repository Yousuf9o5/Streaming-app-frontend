import React from "react";
import image from "images/4957136.jpg";
import Image from "next/image";

function FormLeftSide() {
  return (
    <div className="flex-1 p-[1rem] rounded-[2rem] h-full">
      <Image src={image} alt="" />
      {/* <TempImage width={700} height={700} /> */}
    </div>
  );
}

export default FormLeftSide;
