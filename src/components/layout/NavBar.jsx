import { React, useState, useEffect } from 'react'
import logo from "../../assets/images/home/logo.png";
import logoW from "../../assets/images/home/logoWW.png";
const NavBar = () => {
  const links = [
    { name: 'Home', to: '#' },
    { name: 'About Us', to: '#about' },
    { name: 'Service', to: '#newService' },
    { name: 'Testimonials', to: '#testimonials' },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolling, setScrolling] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  const handleActive = (name) => {
    setActive(name)
    console.log(name)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <nav
        // className={`${
        //   isOpen ? '' : ''
        // } w-full z-20 top-0 left-0 text-tertiary-text font-semibold fixed`}
        className={`${
          scrolling ? 'bg-white text-primary-text shadow-md' : 'w-full z-20 top-0 left-0 text-tertiary-text font-semibold fixed'
        } w-full z-20 top-0 left-0 text-primary-text font-semibold fixed transition-all duration-300`}
     
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ml-4 md:ml-12 mr-8 md:mr-16">
          <div className=' mt-'>
          <a href="/#" className="flex items-center">
            <img
              src={scrolling ? logo : logoW}
              width={150}
              height={150}
              alt="africa bussiness group logo"

            />
          </a>
          </div>
          
          <div className="flex md:order-1">
            <button
              type="button"
              onClick={toggleNavbar}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-primary rounded-lg md:hidden bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 lg:space-x-16 md:mt-0 md:border-0 h-full">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleActive(link.name)}
                    href={`${link.to}`}
                    className={`${
                      active === link.name
                        ? 'text-blue-500 font-bold'
                        : 'py-2'
                    } uppercase relative block text-sm pl-3 pr-4 transision duration-75 md:hover:bg-transparent md:hover:text-blue-500 md:p-0`}
                    aria-current="page"
                  >
                    {link.name}
                    {active === link.name && active !== "contact" && (
                      <span className="transition absolute md:top-10 lg:top-12 left-0 w-full h-0 md:h-1 bg-blue-500 transision duration-150"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact">
              <button
              onClick={() => handleActive("contact")}
                type="button"
                className="focus:ring-4 focus:outline-none uppercase focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center border border-primary ml-4 md:ml-8 bg-gradient-to-r from-[#100F36] to-[#1063DF] text-white"
              >
                Contact
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
