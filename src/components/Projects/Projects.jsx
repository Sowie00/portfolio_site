import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { getProject, getProjects } from "../../../lib/helper";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjectsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProjects();
      setProjects(data);
      setIsLoading(false);
      console.log(projects);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjectsHandler();
  }, [fetchProjectsHandler]);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem
              key={project._id}
              title={project.title}
              image={project.image}
              tags={project.tags}
              projectId={project._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
