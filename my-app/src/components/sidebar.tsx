import React from "react";
import "./sidebar.css";
import { FaHome, FaArrowRight, FaBriefcase, FaEnvelope } from "react-icons/fa";

export type SectionKey = "home" | "projects" | "resume" | "contact";

type SidebarProps = {
  activeSection: SectionKey;
  onSelect: (section: SectionKey) => void;
};

const sections: { key: SectionKey; label: string; Icon: React.ComponentType<{ className?: string }> }[] =
  [
    { key: "home", label: "Home", Icon: FaHome },
    { key: "projects", label: "Projects", Icon: FaArrowRight },
    { key: "resume", label: "Resume", Icon: FaBriefcase },
    { key: "contact", label: "Contact", Icon: FaEnvelope },
  ];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelect }) => {
  return (
    <div className="sidebar">
      <nav className="nav">
        {sections.map(({ key, label, Icon }) => (
          <button
            key={key}
            type="button"
            className={`nav-item ${activeSection === key ? "active" : ""}`}
            onClick={() => onSelect(key)}
          >
            <Icon className="icon" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
