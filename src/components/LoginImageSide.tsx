import TempImage from "layouts/TempImage";
import Image from "next/image";
import React from "react";
import svgFile from "svgs/undraw_pic_profile_re_7g2h.svg";

function LoginImageSide() {
  return (
    <div className="flex-1 p-[1rem] bg-primary rounded-[2rem]">
      {/* <Image src={svgFile} alt="" /> */}
      <TempImage width={700} height={700} />
    </div>
  );
}

export default LoginImageSide;
