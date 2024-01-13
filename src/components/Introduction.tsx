import Image from "next/image";
import React from "react";
import img from "images/20944342.jpg";

const labels = [
  "Welcome to our Application",
  "Have Fun, enjoy",
  "Watch with friends",
  "Join Parties and Have some fun yeah",
];

function Introduction() {
  return (
    <div className="relative w-screen h-screen grid grid-cols-2 gap-4">
      {/* text side */}
      <div className="">
        <h1 className="text-[5rem] font-bold">Stream App</h1>
      </div>
      {/* image side */}
      <div className="">
        <Image src={img} alt="" />
      </div>
    </div>
  );
}

export default Introduction;
