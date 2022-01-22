import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white relative z-10">
        <div className="container mx-auto px-40 flex flex-wrap p-5 flex-col md:flex-row items-center">
          
            <img src="/images/logo.svg" alt="" />
          
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
            <a className="mr-5 hover:text-gray-900">Blog</a>
            <a className="mr-5 hover:text-gray-900">Careers</a>
          </nav>
          <Button />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
