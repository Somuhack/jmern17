import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-400 max-w-screen min-w-[370px]
                        grid grid-rows-4 h-[570px]
                        max-2xl:grid max-2xl:grid-rows-2 px-10 
                        sm:grid sm:grid-rows-4 sm:h-[570px] sm:pt-2
                        md:grid md:grid-rows-3 md:h-[450px] 
                       lg:grid lg:grid-rows-2 lg:px-10 lg:h-[400px] ">
      <div className="grid grid-cols-2 gap-2
                      sm:grid sm:grid-cols-2 sm:gap-2
                      md:grid md:grid-cols-4 md:gap-2 
                      lg:grid lg:grid-cols-6 lg:row-span-2 lg:py-15">
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-2 col-span-2 mb-2">
          <div className="flex shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-4">
            Making the world a better place through<br/> constructing elegant
            hierarchies.
          </p>
          {/* Hello */}
          <div className="flex gap-4 mt-8">
            <div className="text-2xl">
              {" "}
              <FaFacebook />
            </div>
            <div className="text-2xl">
              <FaInstagram />
            </div>
            <div className="text-2xl">
              <BsTwitterX />
            </div>
            <div className="text-2xl">
              <FaGithub />
            </div>
            <div className="text-2xl">
              <FaYoutube />
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-rows-6">
          <h1 className="text-xl font-bold text-gray-50">Solutions</h1>
          <p>Marketing</p>
          <p>Analytics</p>
          <p>Automation</p>
          <p>Commerce</p>
          <p>Insights</p>
        </div>
         <div className="grid grid-rows-6">
          <h1 className="text-xl font-bold text-gray-50">Support</h1>
          <p>Submit ticket</p>
          <p>Documentation</p>
          <p>Guides</p>
        </div>
         <div className="grid grid-rows-6">
          <h1 className="text-xl font-bold text-gray-50">Company</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Press</p>
        </div>
         <div className="grid grid-rows-6">
          <h1 className="text-xl font-bold text-gray-50">Legal</h1>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Automation</p>
          <p>License</p>
        </div>
      </div>
      <div className="font-bold lg:mt-1 lg:mb-7 md:mt-55 sm:mt-93 mt-55">
      <hr className="text-gray-600" />
        © 2024 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
