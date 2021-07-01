import React from "react";
import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import arrowDown from "../images/icon-arrow-down.svg";

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  return (
    <header className="bg-orange-header-sm bg-cover md:bg-orange-header-md h-screen">
      <section
        className="relative text-lg md:static flex justify-between pt-10 md:pb-10 px-4"
        id="top-header"
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button
            className="md:hidden"
            onClick={() => {
              setIsBurgerOpen(!isBurgerOpen);
            }}
          >
            <img src={burger} alt="" />
          </button>
          
          <nav
            className={` ${
              isBurgerOpen ? "" : "hidden"
            } p-7 absolute top-24 right-5 text-main-gray bg-white w-11/12 flex flex-col md:p-0 md:static md:max-content md:bg-transparent md:block md:flex-row md:text-white`}
          >
            <svg className={`${isBurgerOpen ? "" : "hidden"}
            text-white
              fill-current
              absolute
              h-6
              -top-6
              right-0
              `} 
            viewBox="0 0 100 100" preserveAspectRatio="none">  
            <polygon points="100,100 100,0 0,100" />
          </svg>
            <a className="my-4 md:mx-4 md:my0" href="/about">
              About
            </a>
            <a className="my-4 md:mx-4 md:my0" href="/services">
              Services
            </a>
            <a className="my-4 md:mx-4 md:my0" href="/projects">
              Projects
            </a>
            <a
              className=" font-fraunces mx-auto my-4 bg-yellow-300 text-black w-max md:mx-4 md:my0 md:md-0 md:mx-4 md:text-black md:bg-white px-7 py-3 rounded-full"
              href="/contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </section>
      <section
        id="bottom-header"
        className="flex flex-col items-center"
      >
        <h1 className=" mt-24 text-4xl tracking-widest md:text-6xl text-white font-fraunces uppercase">
          We are creatives
        </h1>
        <img className="mt-14 md:mt-20" src={arrowDown} alt="" />
      </section>
    </header>
  );
}
