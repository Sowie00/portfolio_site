import Image from "next/image";
import React from "react";
import { skillsData } from "../../../constants/Data";
import { motion } from "framer-motion";
const Skills = (props) => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((item) => (
            <div
              key={item._id}
              className=" h-36 shadow-xl shadow-gray-200 p-2 bg-gradient-to-r from-[#89D4CF] to-[#734AE8] rounded-full transition-all ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500 hover:ease-in duration-300"
            >
              <motion.div
                key={item._id}
                className="flex h-full w-full items-center rounded-full justify-center bg-white"
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={item.image} width="64px" height="64px" alt="" />
                  </div>
                  <div
                    key={item.skillName}
                    className="flex flex-col items-center justify-center"
                  >
                    <h3>{item.skillName}</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
