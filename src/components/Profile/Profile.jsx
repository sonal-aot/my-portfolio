/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../../styles/components/Profile/Profile.scss';
import profileImage from "../../assets/images/profile.jpg";
import projectsData from '../../data/ProjectsData';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profileContent">
        <div className="profileImageContainer">
          <img src={profileImage} alt="Sonal Sai" className="profileImage" />
        </div>
        <div className="profileText">
          <h1 className="profileTitle">Hi, I'm Sonal Sai</h1>
          <p className="profileSubtitle">A Fresher Software Developer</p>
          <p className="profileDescription">
            Passionate about building innovative solutions with modern technologies. Let's work together to create something amazing!
          </p>
          <a href="#contact" className="ctaButton">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
