import React from "react";
import styles from "./ProjectsStyles.module.css";
import cvGenerator from "../../assets/cv-generator.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <img className="hover" src={cvGenerator} alt="CV Generator" />
        <h3></h3>
    </div>
    </section>
  );
}

export default Projects;
