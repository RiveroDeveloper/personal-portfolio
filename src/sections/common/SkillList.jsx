import React from 'react'
import StackIcon from "tech-stack-icons";
import styles from "../Skills/SkillsStyles.module.css";

function SkillList() {
  return (
    <div className={styles.container}>
      <div className={styles.skillList}>
        <h2>Frontend</h2>
        <SkillItem icon="html5" name="HTML" />
        <SkillItem icon="css3" name="CSS" />
        <SkillItem icon="js" name="JavaScript" />
        <SkillItem icon="react" name="React" />
        <SkillItem icon="tailwindcss" name="Tailwind" />
        <SkillItem icon="flutter" name="Flutter" />
        <SkillItem icon="dart" name="Dart" />
        <h2>Backend</h2>
        <SkillItem icon="nodejs" name="Node.js" />
        <SkillItem icon="c++" name="C++" />
        <SkillItem icon="php" name="PHP" />
        <SkillItem icon="mysql" name="MySQL" />
        <SkillItem icon="postgresql" name="PostgreSQL" />
        <SkillItem icon="render" name="Render" />
        <SkillItem icon="netlify" name="Netlify" />
        <SkillItem icon="firebase" name="Firebase" />
        <h2>Tools</h2>
        <SkillItem icon="git" name="Git" />
        <SkillItem icon="github" name="GitHub" />
        <SkillItem icon="vscode" name="VS Code" />
        <SkillItem icon="notion" name="Notion" />
        <SkillItem icon="figma" name="Figma" />
        <SkillItem icon="ps" name="Photoshop" />
      </div>
    </div>
  )
}

function SkillItem({icon, name}) {
    return (
        <div className={styles.skillItem}>
          <StackIcon name={icon}/>
          <p>{name}</p>
        </div>
    )
}

export default SkillList
