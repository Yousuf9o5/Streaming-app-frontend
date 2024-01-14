import React from "react";
import image from "images/4957136.jpg";
import Image from "next/image";

function FormLeftSide() {
  return (
    <div className="flex-1 p-[1rem] rounded-[2rem] max-h-[700px] max-w-[700px] ">
      <Image src={image} alt="" priority={false} />
      {/* <TempImage width={700} height={700} /> */}
    </div>
  );
}

export default FormLeftSide;
