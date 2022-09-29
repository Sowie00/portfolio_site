import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../../public/assets/about.jpg";

const About = () => {
  return (
    <motion.div
      initial={{
        x: -200,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ x: 0 }}
    >
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-36">
          <div className="col-span-2 p-3 rounded-2xl  to-[#36096D] shadow-2xl mb-8 shadow-gray-400">
            <p className="uppercase flex justify-center p-3 text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="p-2">Who I Am</h2>
            <p className="p-2 text-gray-600">
              / / I am not your average developer
            </p>
            <p className="p-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis ex quasi necessitatibus optio tempora! Eum illum
              explicabo natus quod impedit provident, doloremque facere,
              asperiores, fugit inventore minus ipsam consequuntur. Nostrum.
              Numquam quidem dolore tenetur necessitatibus aspernatur ex
              nesciunt doloremque veritatis maiores deleniti! Ipsa temporibus
              quidem asperiores, illum nisi excepturi praesentium, corrupti
              dolorum, assumenda perspiciatis eos debitis incidunt mollitia
              molestias adipisci.
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
