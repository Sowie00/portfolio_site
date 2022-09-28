import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Main = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Sourav", "I am a full-stack developer."],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#5651ec]">
            <span>{text}</span>
            <Cursor cursorColor="#5651ec" />
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-10">
            <a
              href="https://www.linkedin.com/in/sourav-pandya-a999a7204/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Sowie00"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                <FaGithub />
              </div>
            </a>
            <a href="/#contact">
              <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
                <AiOutlineMail />
              </div>
            </a>

            <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
              <BsPersonLinesFill />
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center">
              <a href="/#about">
                <button>
                  Learn More{" "}
                  <span className="px-2 animate-bounce">
                    <AiOutlineDown />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
