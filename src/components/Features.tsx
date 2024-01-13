import Container from "layouts/Container";
import Image from "next/image";
import React from "react";

const cards = [
  {
    icon: "",
    desc: "",
  },
];

function Features() {
  return (
    <Container className="w-full !grid grid-cols-3 gap-1 py-6 px-3">
      <div className="card rounded-lg h-[250px] shadow-small vertical-slide delay-1000">
        {/* icon */}
        <div className="">
          <Image src={""} alt="" />
        </div>
        {/* desc */}
        <div className=""></div>
      </div>
      <div className="card rounded-lg h-[250px] shadow-small vertical-slide delay-700"></div>
      <div className="card rounded-lg h-[250px] shadow-small vertical-slide delay-300"></div>
    </Container>
  );
}

export default Features;
