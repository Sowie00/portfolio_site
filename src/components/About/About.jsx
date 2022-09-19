import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-6 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            ex quasi necessitatibus optio tempora! Eum illum explicabo natus
            quod impedit provident, doloremque facere, asperiores, fugit
            inventore minus ipsam consequuntur. Nostrum. Numquam quidem dolore
            tenetur necessitatibus aspernatur ex nesciunt doloremque veritatis
            maiores deleniti! Ipsa temporibus quidem asperiores, illum nisi
            excepturi praesentium, corrupti dolorum, assumenda perspiciatis eos
            debitis incidunt mollitia molestias adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
