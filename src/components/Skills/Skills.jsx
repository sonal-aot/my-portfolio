/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/components/Skills/Skills.scss";
import skillsData from "../../data/SkillsData";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillsGrid">
        {skillsData.map((skillData, index) => (
          <SkillCard
            key={index}
            skill={skillData.skill}
            image={skillData.image}
            description={skillData.description} // Pass the description prop
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
