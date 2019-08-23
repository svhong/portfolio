import React from "react";
import ProjectContent from "./ProjectContent"

export default function Projects() {
    return (
        <div style={c1Style} className="page-container">
            <ProjectContent />
        </div>
    );
}

const c1Style = {
    background: "springgreen",
    padding: "1.5rem",
    color: "white"
}