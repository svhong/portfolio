import React from "react";

import gitIcon from "../images/git.png";
import linkedIcon from "../images/linkedin.png";
import resumeIcon from "../images/resume.png";

import resumeFile from "../assets/Sean Hong's Technical Resume.pdf"

export default function LandingIcon() {
    return (
        <div className="landing-icons">
            <a href="http://www.github.com/svhong" target="_blank" rel="noopener noreferrer" className="icon-text">
                <img src={gitIcon} alt="git" />
                <span>GitHub</span>
            </a>
            <a href={resumeFile} target="_blank" download rel="noopener noreferrer" className="icon-text">
                <img src={resumeIcon} alt="linkedin" />
                <span>Resume</span>
            </a>
            <a href="http://www.linkedin.com/in/svhong" target="_blank" rel="noopener noreferrer" className="icon-text">
                <img src={linkedIcon} alt="linkedin" />
                <span>LinkedIn</span>
            </a>
        </div>
    )
}