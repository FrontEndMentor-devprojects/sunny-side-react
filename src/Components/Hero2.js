import React from "react";       
           
export default function Hero2({imageSm, imageMd,header, text,color}) {
  return (
    <div
      className="h-screen md: py-10 px-3 flex flex-col justify-end items-center bg-cover  md:w-1/2 "
      style={{ backgroundImage: `url(${window.innerWidth < 500? imageSm: imageMd})` }}
    >

      <h2 className={`font-fraunces text-3xl mb-4 lg:text-4xl text-${color}`}>
        {header}
      </h2>
      <p className={`text-${color} md:px-36`}>
        {text}
      </p>
    </div>
  );
}
