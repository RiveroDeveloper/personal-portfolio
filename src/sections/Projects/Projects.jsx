import styles from "./ProjectsStyles.module.css";
import cvGenerator from "../../assets/cv-generator.png";
import serena from "../../assets/serena.png";
import netdrive from "../../assets/netdrive.png";
import crm from "../../assets/crm.png";
import ProjectCard from "../common/ProjectCard";
import ProjectModal from "../common/ProjectModal";
import { useRef, useEffect, useState } from "react";
import { animateProjectCards, animateSectionTitle } from "../animations/animations";

// Project data
const projectsData = [
  {
    id: 1,
    title: "CV Generator",
    subtitle: "Audio-based Resume Generator",
    description: "Flutter web application that revolutionizes CV creation through AI-powered audio processing and professional PDF generation with modern design.",
    image: cvGenerator,
    features: [
      "Section-based audio recording with guided system",
      "Smart AI processing using OpenRouter API for automatic transcription",
      "Automatic data validation and intelligent organization",
      "Real-time preview with interactive PDF generation",
      "Secure authentication and cloud storage with Supabase",
      "Modern blue-purple gradient design with Inter typography"
    ],
    technologies: ["Flutter", "Dart", "JavaScript","Supabase"],
    liveUrl: "https://scanner-6c414.web.app",
    githubUrl: "https://github.com/RiveroDeveloper/audio-based-cv-generator"
  },
  {
    id: 2,
    title: "SERENA",
    subtitle: "Advanced Boat Interface System",
    description: "Real-time boat monitoring and control interface with comprehensive data simulation for marine navigation and system management.",
    image: serena,
    features: [
      "Real-time GPS navigation with interactive mapping",
      "Engine diagnostics monitoring (RPM, temperature, oil pressure)",
      "Electrical system monitoring with battery management",
      "Environmental data tracking (temperature, wind, pressure)",
      "Modern glass-morphism UI design with responsive layout",
      "Live data streaming and real-time control commands",
      "Physics-based boat behavior simulation"
    ],
    technologies: ["HTML5", "CSS3","JavaScript", "Node.js", "Express.js", "Socket.io"],
    liveUrl: "https://serena-boat-interface.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/boat-ui-interface"
  },
  {
    id: 3,
    title: "NetDrive",
    subtitle: "Autonomous Vehicle Telemetry System",
    description: "Full-stack telemetry and control system for an autonomous vehicle. A multi-threaded TCP server in C handles concurrent clients with token-based authentication, while a Node.js WebSocket bridge connects the backend to a vanilla JS web interface deployed on Vercel.",
    image: netdrive,
    features: [
      "Multi-threaded TCP server in C with one thread per client",
      "Token and role-based authentication (Admin / Observer)",
      "Live telemetry broadcast every 10 seconds to all authenticated clients",
      "WebSocket-TCP bridge for real-time browser connectivity",
      "Admin panel with vehicle control commands (speed, direction)",
      "Persistent systemd services and Nginx reverse proxy with TLS on VPS",
      "Environment-based config to avoid hardcoding endpoints in source"
    ],
    technologies: ["C", "Node.js", "JavaScript", "WebSocket", "Nginx"],
    liveUrl: "https://net-drive-kappa.vercel.app/",
    githubUrl: "https://github.com/RiveroDeveloper/net-drive"
  },
  {
    id: 4,
    title: "CRM LOG",
    subtitle: "Voice Recording MVP",
    description: "CRM system leveraging browser-based voice recognition technology for efficient prospect data entry and activity logging with real-time speech processing.",
    image: crm,
    features: [
      "Web Speech API integration for voice recognition",
      "Individual field dictation with microphone controls",
      "Sequential 'Dictate All' functionality for complete data entry",
      "Real-time visual feedback during voice recording sessions",
      "Local development with MySQL database integration",
      "Production deployment on hosting platform",
      "Cross-browser compatibility with Chrome and Edge support"
    ],
    technologies: ["PHP","HTML5","JavaScript", "MySQL"],
    liveUrl: "https://prospect-audio-filler.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/prospect-audio-filler"
  }
];

function Projects() {
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    animateSectionTitle(titleRef);
    animateProjectCards([card1Ref, card2Ref, card3Ref, card4Ref]);
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 ref={titleRef} className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          ref={card1Ref} 
          src={cvGenerator} 
          alt="CV Generator" 
          onClick={() => openProject(projectsData[0])}
        />
        <ProjectCard 
          ref={card2Ref} 
          src={serena} 
          alt="Serena" 
          onClick={() => openProject(projectsData[1])}
        />
        <ProjectCard 
          ref={card3Ref} 
          src={netdrive} 
          alt="NetDrive" 
          onClick={() => openProject(projectsData[2])}
        />
        <ProjectCard 
          ref={card4Ref} 
          src={crm} 
          alt="CRM" 
          onClick={() => openProject(projectsData[3])}
        />
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
