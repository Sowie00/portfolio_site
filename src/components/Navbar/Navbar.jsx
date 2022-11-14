import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import logoImg from "../../../public/assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [background, setBackground] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   if (router.pathname === "/projects/[projectId]") {
  //     setNavBg("transparent");
  //     setLinkColor("#f8f8f8");
  //   } else {
  //     setNavBg("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [router]);

  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY >= 350) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", handleBackground);
  }, []);

  return (
    <>
      <div
        className={
          background
            ? "bg-[#ecf0f3] shadow-xl shadow-gray-400 fixed w-full h-20 z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <Link href="/">
              <Image
                className=" transition-all hover:ease-in duration-300 hover:scale-105 cursor-pointer hover:shadow-lg shadow-indigo-500"
                src={logoImg}
                alt="/"
                width="50"
                height="50"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5, delay: 1.0 }}
          >
            <div>
              <ul style={{ color: `#5651e1` }} className="hidden md:flex">
                <Link href="/">
                  <a>
                    <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative  transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500 hover:scale-105">
                      Home
                    </li>
                  </a>
                </Link>
                <Link href="/#about">
                  <a>
                    <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative  transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500 hover:scale-105">
                      About
                    </li>
                  </a>
                </Link>
                <Link href="/#skills">
                  <a>
                    <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative  transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500 hover:scale-105">
                      Skills
                    </li>
                  </a>
                </Link>
                <Link href="/#projects">
                  <a>
                    <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative  transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500 hover:scale-105">
                      Projects
                    </li>
                  </a>
                </Link>
                <Link href="/#contact">
                  <a>
                    <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative  transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500 hover:scale-105">
                      Contact
                    </li>
                  </a>
                </Link>
              </ul>
              <div onClick={handleNav} className="md:hidden">
                <AiOutlineMenu
                  className="cursor-pointer transition-all hover:scale-105 hover:ease-in duration-300"
                  color="#565ec1"
                  size={25}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  className="cursor-pointer hover:scale-105 transition-all hover:ease-in duration-300"
                  src={logoImg}
                  width="50"
                  height="50"
                ></Image>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-indigo-500 ease-in duration-200"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-[#5651e1]">
                  LET&apos;S COLLABORATE
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul style={{ color: "#5651e1" }} className="uppercase">
                <Link href="/">
                  <li
                    color="#5651e1"
                    onClick={() => setNav(false)}
                    className="py-4 text-sm no-underline font-bold relative hover:text-[#5651e1] transition-transform duration-200 hover:scale-105 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-200 hover:scale-105 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-200 hover:scale-105 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-200 hover:scale-105 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-200 hover:scale-105 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-wide text-[#5651e5]">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a
                    href="https://www.linkedin.com/in/sourav-pandya-a999a7204/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setNav(false)}
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                      <FaLinkedinIn className="transition-all hover:text-[#5651e1]" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Sowie00"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setNav(false)}
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                      <FaGithub className="transition-all hover:text-[#5651e1]" />
                    </div>
                  </a>
                  <Link href="/#contact" onClick={() => setNav(false)}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                      <AiOutlineMail className="transition-all hover:text-[#5651e1]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
