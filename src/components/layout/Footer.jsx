import React from "react";
import logo from "../../assets/images/home/logo.png"
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";


const socialMediaLinks = [
    { icon: BiLogoFacebook, link: "https://www.facebook.com/" },
    { icon: BiLogoTwitter, link: "https://twitter.com/" },
    { icon: BiLogoInstagram, link: "https://instagram.com/innovest_africa_business_group?utm_source=qr" },
    { icon: BiLogoLinkedin, link: "https://www.linkedin.com/" },
  ];

const Footer = () => {
  const links = [
    { name: "About Us", to: "#about" },
    { name: "Services", to: "#services" },
    // { name: "market", to: "#" },
    { name: "testimonials", to: "#testimonials" },
  ];
  return (
    <div>
      <footer className="bg-white">
         <hr className="border-gray-300 sm:mx-auto lg:my-4" />
        <div className="mx-auto flex items-centers mr-4 ml-4">
            
          <div className="flex flex-row space-x-6 sm:space-x-8 sm:space-y-4 items-center mx-auto flex-wrap ">
            {socialMediaLinks.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <div
                        className="rounded-full shadow-[rgba(50,50,93,0.25)_0px_6px_30px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-4 px-4 sm:py-8 sm:px-8"
                    >
                        <item.icon
                        width={50}
                        height={50}
                        color="#00407B"
                        className="h-4 w-4 sm:w-6 sm:h-6  md:w-7 md:h-7"
                        />
                    </div>
                    </a>
                ))}
                </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-[#454648] mt-8">
          <div className="md:flex md:justify-between grid md:grid-cols-3 ">
            <div className="mb-6 md:mb-0 md:ml-0 ml-4">
              <a href="#" className="flex items-center mb-8">
                <img
                  src={logo}
                  className="me-3"
                  alt="inovest Logo"
                  width={300}
                  height={300}
                />
              </a>
              <div className="ml-4 md:font-medium font-normal md:text-lg text-base">
                {" "}
                <p className="mb-6 font-bold text-xl">Innovest Africa Business Group</p>
                <p>Importing and Exporting Industry.</p>
              </div>
            </div>
            <div className="md:ml-0 ml-8">
              <h2 className="mb-6 font-bold text-lg">Links</h2>
              <ul className="text-normal md:text-lg font-medium">
                {links.map((link, index) => (
                  <li className="mb-1" key={index}>
                    <a href={`${link.to}`} className="hover:underline ">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:ml-0 ml-8 md:mt-0 mt-8">
              <h2 className="mb-6 font-bold text-lg">Contact Us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <p>
                  Inspiring innovation,  
                  <br></br>Driving Investment,{" "}
                    <br />
                    Empowering Growth.{" "}
                  </p>
                </li>
                <li>
                  <p>+251903876666</p>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
          </div>

          <div className="text-center mt-8">
            <small className="text-md text-gray-500">
            Made with ❤ at {' '}
              <span>
                <a href="https://upsurge.com.et/" className="hover:underline">
                 Upsurge Tech 
                </a>
              </span>{" "}
              © 2023, All rights reserved.
            </small>
          </div>
         
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;