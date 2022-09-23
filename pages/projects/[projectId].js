import React from "react";
import { getProject, getProjects } from "../../lib/helper";

export const getStaticPaths = async () => {
  const data = await getProjects();
  const paths = data.map((project) => {
    return {
      params: { projectId: project._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const projectId = context.params.projectId;
  const data = await getProject(projectId);
  return {
    props: { project: data },
  };
};

const Details = ({ project }) => {
  console.log(project);
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
};

export default Details;
