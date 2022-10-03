import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <motion.div
          className="col-span-2"
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 2.0,
            delay: 1.5,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase p-3 text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="p-2">Who I Am</h2>
          <p className="p-2 text-gray-600">
            Passionately committed to the philosophy of focusing on the craft,
            I&apos;m a full stack developer with an extensive passion for
            JavaScript, React and all things full-stack development. With
            abundance of technologies with new technologies emerging day by day,
            my passion for full-stack development is never-ending and drives my
            excitement to learn new technologies. When I&apos;m not writing
            code, I like to unwind by playing video games, going to the gym and
            reading a good book.
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 2.0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
            <Image src={aboutImg} width={2000} height={2000} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
