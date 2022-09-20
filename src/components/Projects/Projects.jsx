import Image from "next/image";
import React from "react";
import { projects } from "../../../constants/Data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              title={project.title}
              image={project.image}
              tags={project.tags}
              projectUrl={project.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
