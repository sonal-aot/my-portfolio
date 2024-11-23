/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../../../styles/components/ProjectCard/ProjectCard.scss";

const ProjectCard = ({ title, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="projectCard">
      <h3 className="projectTitle">{title}</h3>
      <p className="projectDescription">{description}</p>
      <ul className="projectTechStack">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="projectLinks">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="projectLink">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="projectLink">
          GitHub
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
