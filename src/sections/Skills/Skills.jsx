import styles from "./SkillsStyles.module.css"
import SkillList from "../common/SkillList";


function Skills() {
  return (
    <section id="skills" className={styles.container}>
    <h1>Skills</h1>
    <SkillList />
    </section>

  )
}

export default Skills
