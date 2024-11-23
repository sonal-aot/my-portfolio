/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/components/Projects/Projects.scss";
import projectsData from "../../data/ProjectsData";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <div className="projectsGrid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
