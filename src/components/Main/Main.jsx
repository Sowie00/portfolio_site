import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

const Main = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Sourav", "I am a full-stack developer."],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="relative w-full h-full p-2 flex justify-center items-center">
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.0, delay: 2.5 }}
        >
          <div className="flex justify-center items-center">
            <h1 className="py-4 text-[#5651e1]">
              <span>{text}</span>
              <Cursor cursorColor="#5651e1" />
            </h1>
          </div>
        </motion.div>
        <div className="pt-10 absolute top-1/2">
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
            transition={{ duration: 1.0, delay: 3.0 }}
          >
            <div className="flex items-center justify-between max-w-[330px] m-auto py-10">
              <a
                href="https://www.linkedin.com/in/sourav-pandya-a999a7204/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-[#ecf0f3] shadow-lg shadow-gray-400 p-4 cursor-pointer mr-3 transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                  <FaLinkedinIn color="#5651e1" size={20} />
                </div>
              </a>
              <a
                href="https://github.com/Sowie00"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-[#ecf0f3] shadow-lg mr-3 shadow-gray-400 p-4 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                  <FaGithub color="#5651e1" size={20} />
                </div>
              </a>
              <Link href="/#contact">
                <div className="rounded-full bg-[#ecf0f3] shadow-lg mr-3 shadow-gray-400 p-4 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                  <AiOutlineMail color="#5651e1" size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.0, delay: 3.5 }}
          >
            <div className="flex justify-center items-center">
              <Link href="/#about">
                <button className="w-full p-4 text-md flex justify-center items-center cursor-pointer transition-all ease-in duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                  Learn More{" "}
                  <span className="px-2 animate-bounce">
                    <AiOutlineDown />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
