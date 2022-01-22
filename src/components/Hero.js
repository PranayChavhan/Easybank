import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:pl-40 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 lg:items-start lg:text-start z-10 pt-40">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-normal text-gray-800 ">
              Next generation
              <br className="hidden lg:inline-block" />
              digital banking
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400 font-normal">
              Take your financial life online. Your Easybank account <br /> will be a one-stop-shop 
              for spending, saving, <br /> budgeting, investing, and must more.
            </p>
            <div className="flex justify-center">
              <Button />
            </div>
          </div>
          <div className="">
            <img
              className="absolute -top-40 -right-80"
              alt="hero"
              src="/images/bg-intro-desktop.svg"
            />
             <img 
              className="absolute overflow-x-hidden  -top-10 -right-20"
              src="/images/image-mockups.png" 
              alt=""
             />
          </div>
          <div className="">
         
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
