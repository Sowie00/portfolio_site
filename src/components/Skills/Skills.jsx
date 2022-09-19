import Image from "next/image";
import React from "react";
import Html from "../../../public/assets/skills/html.png";
import { skillsData } from "../../../constants/Data";
const Skills = (props) => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((item) => (
            <div className="p-6 shadow-xl rounded-xl transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto animate-bounce" key={item.id}>
                  <Image src={item.image} width="64px" height="64px" alt="/" />
                </div>
                <div
                  key={item.skillName}
                  className="flex flex-col items-center justify-center"
                >
                  <h3>{item.skillName}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
