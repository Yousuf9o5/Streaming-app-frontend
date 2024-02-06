import Container from "layouts/Container";
import Image from "next/image";
import React from "react";
import { cardsData } from "../data/featuresData";

function Features() {
  return (
    <Container className="w-full !grid grid-cols-3 gap-1 py-6 px-3">
      {cardsData.map((item, i) => (
        <div
          className="flex flex-col items-center gap-2 rounded-lg h-[230px] p-5 vertical-slide hover:shadow-small transition-shadow"
          key={String(i) + "-cardsData"}
        >
          {/* icon */}
          <div className="w-[60px] h-[60px]">
            <Image src={item.icon} alt="" className="w-full h-full" />
          </div>
          <div className="text-h4">{item.header}</div>
          {/* desc */}
          <div className="text-[14px] text-center">{item.desc}</div>
        </div>
      ))}
    </Container>
  );
}

export default Features;
