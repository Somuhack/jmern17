import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-950 h-100 w-screen max-2xl:* grid grid-rows-2 px-10 text-gray-400  ">
      <div className="grid grid-cols-6 row-span-2 py-15">
        <div className="col-span-2">
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
      <hr className="text-gray-600" />
      <div className="font-bold py-8">
        © 2024 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
