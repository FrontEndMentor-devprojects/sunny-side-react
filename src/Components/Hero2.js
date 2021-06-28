import React from "react";
import Cherry from "../images/mobile/image-graphic-design.jpg";

export default function Hero2() {
  return (
    <div
      className="h-screen md:h-96 py-10 px-3 flex flex-col justify-end items-center bg-cover  md:w-1/2 md:bg-auto"
      style={{ backgroundImage: `url(${Cherry})` }}
    >
      <h2 className="font-fraunces text-3xl mb-4 lg:text-4xl text-dark-sat-cyan">
        Graphic design
      </h2>
      <p className="text-dark-sat-cyan ">
        Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients’ attention.
      </p>
    </div>
  );
}
