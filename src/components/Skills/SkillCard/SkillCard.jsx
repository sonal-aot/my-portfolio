/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../../../styles/components/Skills/SkillCard/SkillCard.scss";

const SkillCard = ({ skill, image, description }) => {
  return (
    <div className="skillsCard">
      <img src={image} alt={skill} className="skillImage" />
      <h4 className="skillName">{skill}</h4>
      <p className="skillDescription">{description}</p>
    </div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // Image URL for the skill
  description: PropTypes.string, // Optional description for the skill
};

export default SkillCard;

