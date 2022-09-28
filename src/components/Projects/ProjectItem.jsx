import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProject } from "../../../lib/helper";

const ProjectItem = ({ title, image, tags, projectId }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl transition-all ease-in-out delay-75 group hover:bg-gradient-to-r from-[#5651e5] to [#709dff] hover:scale-105">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        width="800px"
        height="700px"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-black tracking-wider text-center">
          {title}
        </h3>
        <ul className="flex justify-around p-2 my-5">
          {tags.map((tag, i) => {
            return (
              <div className="rounded-xl px-2 py-1 mx-2 bg-[#5651e5]">
                <li id={i} className="text-sm text-white">
                  {tag}
                </li>
              </div>
            );
          })}
        </ul>
        <Link key={projectId} href={`/projects/${projectId}`}>
          <p className="text-center py-3 rounded-lg bg-[#5651e5] text-white text-lg cursor-pointer">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
