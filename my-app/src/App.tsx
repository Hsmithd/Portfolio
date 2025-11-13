import React, { useState } from "react";
import "./App.css";
import Sidebar, { SectionKey } from "./components/sidebar";
import resumePdf from "./Resume - Hayden Smith.pdf";

type Project = {
  title: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Unimeet",
    description:
      "A dating app for university students. Built with a modern Hex-Architecture and Domain-Driven Design, ensuring scalability, maintainability, and clear separation of business logic.",
    url: "https://example.com/Unimeet",
  },
  {
    title: "MusicTrainer",
    description:
      "A web-based platform that helps college music students practice more effectively using a RESTful API, ABCJS playback, and AI-generated personalized practice etudes and learning tools.",
    url: "https://example.com/MusicTrainer",
  },
  
];

const SectionContent: React.FC<{ section: SectionKey }> = ({ section }) => {
  if (section === "home") {
    return (
      <div className="Panel home-panel">
        <h1>Hayden Smith</h1>
        <p>
          Aspiring Software Engineer<br />
          I build modern web applications with a creative and technical
          approach, writing clean, efficient, and scalable code.
        </p>
        <a
          href="https://github.com/Hsmithd"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hayden-smith2003"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:smithhaydendwight@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
      </div>
    );
  }

  if (section === "projects") {
    return (
      <div className="Panel projects-panel">
        <h1>Projects</h1>
        <div className="project-list">
          {projects.map(({ title, description, url }) => (
            <a
              key={title}
              href={url}
              className="project-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-text">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (section === "resume") {
    return (
      <div className="Panel">
        <h1>Resume</h1>
        <p>
          Experience across frontend, backend, and DevOps. Download a PDF or dig
          into the specifics of my past roles, internships, and accomplishments.
        </p>
      </div>
    );
  }

  return (
    <div className="Panel contact-panel">
      <h1>Get in Touch</h1>
      <p>
        I'm currently available and looking for opportunities in the
        Chippewa Valley. Feel free to reach out if you'd like to connect!
      </p>
      
      <a className="contact-button" href="mailto:smithhaydendwight@gmail.com">
        Email Me
      </a>
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const handleSectionSelect = (section: SectionKey) => {
    if (section === "resume") {
      window.open(resumePdf, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Sidebar activeSection={activeSection} onSelect={handleSectionSelect} />
      <div className="content" key={activeSection}>
        <SectionContent section={activeSection} />
      </div>
    </div>
  );
}

export default App;
