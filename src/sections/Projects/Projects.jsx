import styles from "./ProjectsStyles.module.css";
import cvGenerator from "../../assets/cv-generator.webp";
import serena from "../../assets/serena.webp";
import netdrive from "../../assets/netdrive.webp";
import crm from "../../assets/crm.webp";
import cocoaapp from "../../assets/cocoaapp.webp";
import automatch from "../../assets/automatch.webp";
import packtrack from "../../assets/packtrack.webp";
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
    description: "AI-powered audio CV generator with automatic transcription and PDF export.",
    image: cvGenerator,
    features: [
      "Section-based audio recording with guided system",
      "Smart AI processing using OpenRouter API for automatic transcription",
      "Automatic data validation and intelligent organization",
      "Real-time preview with interactive PDF generation",
      "Secure authentication and cloud storage with Supabase",
      "Modern blue-purple gradient design with Inter typography"
    ],
    technologies: ["Flutter", "Dart", "Supabase", "JavaScript"],
    liveUrl: "https://scanner-6c414.web.app",
    githubUrl: "https://github.com/RiveroDeveloper/audio-based-cv-generator"
  },
  {
    id: 2,
    title: "SERENA",
    subtitle: "Advanced Boat Interface System",
    description: "Real-time boat monitoring interface with GPS, engine diagnostics, and live data simulation.",
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
    technologies: ["JavaScript", "Node.js", "Express.js", "Socket.io"],
    liveUrl: "https://serena-boat-interface.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/boat-ui-interface"
  },
  {
    id: 3,
    title: "NetDrive",
    subtitle: "Autonomous Vehicle Telemetry System",
    description: "Autonomous vehicle telemetry with a C TCP server, real-time WebSocket bridge, and live web dashboard.",
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
    technologies: ["C", "Node.js", "WebSocket", "Nginx"],
    liveUrl: "https://net-drive-kappa.vercel.app/",
    githubUrl: "https://github.com/RiveroDeveloper/net-drive"
  },
  {
    id: 4,
    title: "CRM LOG",
    subtitle: "Voice Recording MVP",
    description: "CRM with browser-based voice recognition for fast prospect data entry and activity logging.",
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
    technologies: ["PHP", "JavaScript", "MySQL", "Web Speech API"],
    liveUrl: "https://prospect-audio-filler.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/prospect-audio-filler"
  },
  {
    id: 5,
    title: "CocoaApp",
    subtitle: "Smart Cacao Monitoring Platform",
    description: "Cacao crop monitoring with interactive maps, fruit ripeness tracking, and agronomic analytics.",
    image: cocoaapp,
    features: [
      "Interactive leaflet maps with tree and fruit markers",
      "Fruit ripeness tracking (inmaduro, transición, maduro, enfermo)",
      "Zone analysis with clustering and automatic notifications",
      "Agricultural statistics dashboard with visualizations",
      "Secure authentication and cloud data with Supabase",
      "FastAPI backend with REST API and profile-based statistics"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "Supabase"],
    liveUrl: "https://cocoa-frontend-ytxc.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/cocoapp"
  },
  {
    id: 6,
    title: "AutoMatch",
    subtitle: "Vehicle Marketplace & Comparison Platform",
    description: "Vehicle marketplace with smart search, comparison, multi-currency pricing, and PDF/Excel reports.",
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
    technologies: ["React", "Django", "Python", "Docker"],
    liveUrl: "https://automatch-q0b8.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/auto-match"
  },
  {
    id: 7,
    title: "PackTrack",
    subtitle: "Package & Warehouse Monitoring Platform",
    description: "Package tracking dashboard with real-time status, warehouse analytics, and interactive maps.",
    image: packtrack,
    features: [
      "Real-time package tracking with detailed timeline and status history",
      "Interactive warehouse capacity management and analytics",
      "Data visualizations with Chart.js (activity and capacity charts)",
      "Leaflet maps for geographic package and warehouse view",
      "JWT authentication with role-based access (User / Admin)",
      "NestJS backend with TypeORM and SQLite persistence",
      "Deployed as a combined Nginx + NestJS + Vue container on Render"
    ],
    technologies: ["Vue.js", "TypeScript", "NestJS", "SQLite"],
    liveUrl: "https://packtrack-qxr5.onrender.com/",
    githubUrl: "https://github.com/RiveroDeveloper/package-monitor"
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
  const card7Ref = useRef(null);
  
  useEffect(() => {
    animateSectionTitle(titleRef);
    animateProjectCards([card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref, card7Ref]);
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
        <ProjectCard 
          ref={card7Ref} 
          src={packtrack} 
          alt="PackTrack" 
          title={projectsData[6].title}
          description={projectsData[6].description}
          technologies={projectsData[6].technologies}
          liveUrl={projectsData[6].liveUrl}
          githubUrl={projectsData[6].githubUrl}
        />
      </div>
    </section>
  );
}

export default Projects;
