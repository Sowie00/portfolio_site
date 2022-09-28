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
        <div className="max-w-[1240px] m-auto md:grid grid-cols-8 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              / / I am not your average developer
            </p>
            <p className="py-2 text-gray-600">
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
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
