import Image from "next/image";
import React from "react";

const ProjectItem = ({
  title,
  description,
  image,
  tags,
  source,
  visit,
  id,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        width="500px"
        height="500px"
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt="/"
      />
    </div>
  );
};

export default ProjectItem;
