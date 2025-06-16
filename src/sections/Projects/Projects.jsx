import styles from "./ProjectsStyles.module.css";
import cvGenerator from "../../assets/cv-generator.png";
import serena from "../../assets/serena.png";
import crm from "../../assets/crm.png";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={cvGenerator} alt="CV Generator" />
        <ProjectCard src={serena} alt="Serena" />
        <ProjectCard src={crm} alt="CRM" />
      </div>
    </section>
  );
}

export default Projects;
