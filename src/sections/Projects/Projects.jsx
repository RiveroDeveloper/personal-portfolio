import styles from "./ProjectsStyles.module.css";
import cvGenerator from "../../assets/cv-generator.png";
import serena from "../../assets/serena.png";
import netdrive from "../../assets/netdrive.png";
import crm from "../../assets/crm.png";
import cocoaapp from "../../assets/cocoaapp.png";
import automatch from "../../assets/automatch.png";
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
  },
  {
    id: 5,
    title: "Cocoapp",
    subtitle: "Smart Cacao Monitoring Platform",
    description: "Full-stack platform for real-time monitoring of cacao crops. Interactive maps track trees and fruit ripeness, while zone analysis and clustering provide agronomic insights for farmers.",
    image: cocoaapp,
    features: [
      "Interactive leaflet maps with tree and fruit markers",
      "Fruit ripeness tracking (inmaduro, transición, maduro, enfermo)",
      "Zone analysis with clustering and automatic notifications",
      "Agricultural statistics dashboard with visualizations",
      "Secure authentication and cloud data with Supabase",
      "FastAPI backend with REST API and profile-based statistics"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Supabase", "Leaflet"],
    liveUrl: "https://cocoa-frontend-ytxc.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/cocoapp"
  },
  {
    id: 6,
    title: "AutoMatch",
    subtitle: "Vehicle Marketplace & Comparison Platform",
    description: "Full-stack vehicle marketplace with smart search, side-by-side comparison, multi-currency pricing, and PDF/Excel report generation. Built with a React frontend and a Django REST API, deployed in a single container on Render.",
    image: automatch,
    features: [
      "Advanced vehicle search with multi-filter (make, category, year, price)",
      "Side-by-side vehicle comparison with spec-by-spec breakdown",
      "Multi-currency support (USD, COP, EUR) with live exchange rates",
      "PDF and Excel report generation for any vehicle",
      "JWT authentication with shopping cart functionality",
      "Full internationalization (English/Spanish) with translation management",
      "Deployed as a combined Nginx + Django container on Render"
    ],
    technologies: ["React", "JavaScript", "Django", "Python", "REST API", "Docker", "Nginx"],
    liveUrl: "https://automatch-q0b8.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/auto-match"
  }
];

function Projects() {
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);
  
  useEffect(() => {
    animateSectionTitle(titleRef);
    animateProjectCards([card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref]);
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 ref={titleRef} className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          ref={card1Ref} 
          src={cvGenerator} 
          alt="CV Generator" 
          title={projectsData[0].title}
          description={projectsData[0].description}
          technologies={projectsData[0].technologies}
          liveUrl={projectsData[0].liveUrl}
          githubUrl={projectsData[0].githubUrl}
        />
        <ProjectCard 
          ref={card2Ref} 
          src={serena} 
          alt="Serena" 
          title={projectsData[1].title}
          description={projectsData[1].description}
          technologies={projectsData[1].technologies}
          liveUrl={projectsData[1].liveUrl}
          githubUrl={projectsData[1].githubUrl}
        />
        <ProjectCard 
          ref={card3Ref} 
          src={netdrive} 
          alt="NetDrive" 
          title={projectsData[2].title}
          description={projectsData[2].description}
          technologies={projectsData[2].technologies}
          liveUrl={projectsData[2].liveUrl}
          githubUrl={projectsData[2].githubUrl}
        />
        <ProjectCard 
          ref={card4Ref} 
          src={crm} 
          alt="CRM" 
          title={projectsData[3].title}
          description={projectsData[3].description}
          technologies={projectsData[3].technologies}
          liveUrl={projectsData[3].liveUrl}
          githubUrl={projectsData[3].githubUrl}
        />
        <ProjectCard 
          ref={card5Ref} 
          src={cocoaapp} 
          alt="Cocoapp" 
          title={projectsData[4].title}
          description={projectsData[4].description}
          technologies={projectsData[4].technologies}
          liveUrl={projectsData[4].liveUrl}
          githubUrl={projectsData[4].githubUrl}
        />
        <ProjectCard 
          ref={card6Ref} 
          src={automatch} 
          alt="AutoMatch" 
          title={projectsData[5].title}
          description={projectsData[5].description}
          technologies={projectsData[5].technologies}
          liveUrl={projectsData[5].liveUrl}
          githubUrl={projectsData[5].githubUrl}
        />
      </div>
    </section>
  );
}

export default Projects;
