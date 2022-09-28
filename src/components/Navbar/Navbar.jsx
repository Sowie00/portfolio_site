import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [hideNav, setHideNav] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.pathname === "/projects/[projectId]") {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const handleHiddenNav = () => {
      if (window.scrollY <= 900) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
    };
    window.addEventListener("scroll", handleHiddenNav);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        hideNav
          ? "hidden fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="/">
          {" "}
          <Image
            className=" transition-all hover:ease-in duration-300 hover:scale-105 cursor-pointer hover:shadow-lg shadow-indigo-500"
            src="/../public/assets/logo.png"
            alt="/"
            width="50"
            height="50"
          />
        </a>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm font-bold uppercase py-4 no-underline relative hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500">
                Contact
              </li>
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
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
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
                src="/../public/assets/logo.png"
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
              <p className="w-[85%] md:w-[90%] py-4">Let's collaborate</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  color="#5651e1"
                  onClick={() => setNav(false)}
                  className="py-4 text-sm no-underline font-bold relative hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm no-underline relative font-bold hover:text-[#5651e1] transition-transform duration-100 ease-in-out after:left-0 after:w-full after:h-px after:-bottom-0.5 after:scale-x-0 origin-left hover:after:scale-x-100 before:absolute before:bg-[#5651e1] before:transition-transform before:duration-500 after:absolute after:bg-[#5651e1] after:transition-transform after:duration-500"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-wide text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                  <FaLinkedinIn className="transition-all hover:text-[#5651e1]" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                  <FaGithub className="transition-all hover:text-[#5651e1]" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                  <AiOutlineMail className="transition-all hover:text-[#5651e1]" />
                </div>
                <div className="rounded-full animate-button shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-xl hover:shadow-indigo-500">
                  <BsPersonLinesFill className="transition-all hover:text-[#5651e1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
