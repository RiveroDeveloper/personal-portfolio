import React from 'react';
import StackIcon from "tech-stack-icons";
import styles from './TechBadge.module.css';

// Mapping of technology names to StackIcon names
const techIconMap = {
  'Flutter': 'flutter',
  'Dart': 'dart',
  'Supabase': 'supabase',
  'OpenAI': 'openai',
  'PDF.js': 'js',
  'HTML2Canvas': 'html5',
  'jsPDF': 'js',
  'Google Fonts': 'google',
  'Node.js': 'nodejs',
  'Express': 'express',
  'Socket.io': 'socketio',
  'JavaScript': 'js',
  'CSS3': 'css3',
  'HTML5': 'html5',
  'Leaflet.js': 'js',
  'WebSocket': 'websocket',
  'PHP': 'php',
  'Chrome': 'chrome',
  'XAMPP': 'xampp',
  'MySQL': 'mysql',
  'Speech Recognition API': 'js',
  'Web Audio API': 'js',
  'PostgreSQL': 'postgresql',
  'JWT': 'jwt',
  'Chart.js': 'chartjs',
  'React': 'react',
  'TypeScript': 'typescript',
  'MongoDB': 'mongodb',
  'MapBox API': 'mapbox',
  'Next.js': 'nextjs',
  'Tailwind CSS': 'tailwindcss',
  'Express.js': 'express',
  'Framer Motion': 'framer',
  'Zustand': 'zustand',
  'Zod': 'zod'
};

const TechBadge = ({ tech }) => {
  const iconName = techIconMap[tech] || 'default';
  
  return (
    <div className={styles.techBadge}>
      <StackIcon name={iconName} />
      <span>{tech}</span>
    </div>
  );
};

export default TechBadge; 