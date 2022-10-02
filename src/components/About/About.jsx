import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../public/assets/about.png";

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
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase p-3 text-xl tracking-widest text-[#5651e5]">
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
          <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
            <Image src={aboutImg} width={2000} height={2000} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
