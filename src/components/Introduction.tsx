import Image from "next/image";
import React from "react";
import img from "images/20944342.png";
import useIntervalCounter from "hooks/useIntervalCounter";

const paragraphs = [
  "Welcome to our Application",
  "Have Fun, enjoy",
  "Watch with friends",
  "Join Parties and Have some fun yeah",
  "Upload your favorite videos",
];

function Introduction() {
  const counter = useIntervalCounter(0, 2500, paragraphs.length);

  return (
    <div className="relative w-full grid grid-cols-2 gap-4">
      {/* text side */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <h1 className="text-[3rem] font-bold mb-5">Stream App</h1>
        <div className="h-[30px]">
          {paragraphs.map((item, i) => {
            const isActive = counter == i ? "active-p" : "";
            return (
              <p
                className={`text-h3 opacity-0 max-h-0 translate-y-[10px] ${isActive}`}
                key={item}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
      {/* image side */}
      <div className="flex-1 grid place-items-center">
        <Image src={img} alt="" />
      </div>
    </div>
  );
}

export default Introduction;
