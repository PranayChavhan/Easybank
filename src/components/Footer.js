import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <footer class="text-[#fafafa] body-font bg-[#2d314d]">
        <div class="container mx-auto px-40 py-10 flex justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          <div className="flex justify-between w-[50%]">

          <div class="flex-colflex-shrink-0 md:mx-0 mx-auto text-center  md:text-left">
              <img className="bg-white" src="/images/logo.svg" alt="" />
              <div className="flex gap-3 mt-5">
                <img src="/images/icon-facebook.svg" alt="" />
                <img src="/images/icon-youtube.svg" alt="" />
                <img src="/images/icon-twitter.svg" alt="" />
                <img src="/images/icon-pinterest.svg" alt="" />
                <img src="/images/icon-instagram.svg" alt="" />
              </div>
          </div>

          <div className=" flex flex-col gap-5 ">
            <a href="/">About Us</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
          </div>

          <div className=" flex flex-col gap-5">
            <a href="/">Careers</a>
            <a href="/">Support</a>
            <a href="/">Privacy Policy</a>
          </div>

          </div>

          <div className="flex flex-col items-end gap-3 text-gray-400">
            <Button/>

            <span>&copy; EasyBank. All Rights Reserved</span>
          </div>





        </div>
      </footer>
    </div>
  );
};

export default Footer;
