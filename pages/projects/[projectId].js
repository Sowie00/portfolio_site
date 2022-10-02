import Image from "next/image";
import React from "react";
import Project from "../../models/projectModel";
import { GoArrowSmallRight } from "react-icons/go";
import connectMongo from "../../database/mongodb";

// export const getStaticPaths = async () => {
//   const data = await getProjects();
//   const paths = data.map((project) => {
//     return {
//       params: { projectId: project._id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  connectMongo();
  const projectId = context.params.projectId;
  const data = await Project.findById(projectId);
  console.log(data);
  return {
    props: { project: JSON.parse(JSON.stringify(data)) },
  };
};

const Details = ({ project }) => {
  console.log(project);
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          src={project.image}
          alt="/"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{project.title}</h2>
          <h3>{project.tags.join(" / ")}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest text-[#5651ec]">Project</p>
          <h2 className="pb-6">Overview</h2>
          <p className="text-xl">{project.description}</p>
          <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#380036] to-[#0CBABA] text-white transition-all hover:shadow-lg hover:shadow-teal-400 duration-300 hover:-translate-y-1">
            Demo
          </button>
          <button className=" px-8 py-2 mt-4 bg-gradient-to-r from-[#380036] to-[#0CBABA] text-white transition-all hover:shadow-lg hover:shadow-teal-400 duration-300 hover:-translate-y-1">
            Code
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-indigo-500 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {project.tags.map((tag, i) => (
                <p
                  key={i}
                  className="text-gray-600 py-2 flex items-center hover:animate-pop"
                >
                  <GoArrowSmallRight color="#5651e5" size={30} /> {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
