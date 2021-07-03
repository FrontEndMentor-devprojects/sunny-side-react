import React from "react";

export default function Hero1({
  imageSm,
  imageMd,
  header,
  text,
  moreRef,
  color,
  order,
}) {
  return (
    <div className="md:flex">
      <section className={`md:w-1/2 ${order % 2 ? "md:order-1" : "md:order-2"}`}>
        <picture className="w-screen">
          <source media="(min-width:465px)" srcSet={imageMd} />
          <img src={imageSm} alt="" />
        </picture>
      </section>
      <section className=" px-7 py-12 space-y-8 md:order-1 md:space-y-1 md:w-1/2 sm:p-14 md:p-10 lg:p-32 bg-white flex flex-col justify-between items-center md:items-baseline">
        <h2 className="font-fraunces text-3xl lg:text-5xl md:text-left">
          {header}
        </h2>
        <p className="font-barlow text-main-gray md:text-left md:leading-loose">{text}</p>
        <a
          className={`px-2 leading-2 rounded-md	 font-fraunces uppercase border-b-8 ${"border-"+color} border-opacity-30	`}
          href={moreRef}
        >
          Learn more
        </a>
      </section>
    </div>
  );
}
