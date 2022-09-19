import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 animate-fadeInLeft">
            Hello, I'm{" "}
            <span className="text-[#5651e5] animate-pulse">Sourav</span>
          </h1>
          <h1 className="py-4 text-gray-700 animate-fadeInRight">
            I'm a full-stack developer
            <span className="text-[#5651e5] animate-pulse">.</span>
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
              <FaGithub />
            </div>
            <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full animate-bounce shadow-lg shadow-gray-400 p-6 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
              <BsPersonLinesFill />
            </div>
          </div>
          <div className="flex justify-center items-center animate-fadeInBottom">
            <button>
              Learn More{" "}
              <span>
                <AiOutlineDown />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
