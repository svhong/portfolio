import React, { Component } from "react";
import ProjectCard from "./ProjectCard";


export default class Projects extends Component {
    // Make content changes inside the state
    //refactor with hooks?
    state = {
        projects: [
            {
                ProjectTitle: "React Hook Blocks",
                ProjectImageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                ProjectDescription: "Describing the project here in detail lots and lots and lotsand lotsand lotsand lotsand lotsand lotsand lots of detail",
                ProjectTech: "These types of technologies were used",
                ProjectHover: false
            },
            {
                ProjectTitle: "Personal Blog Editor",
                ProjectImageUrl: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?cs=srgb&dl=architecture-buildings-city-325185.jpg&fm=jpg",
                ProjectDescription: "Describing the project here in detail lots and lots and lotsand lotsand lotsand lotsand lotsand lotsand lots of detail",
                ProjectTech: [],
                ProjectHover: false
            },
            {
                ProjectTitle: "Personal Blog Editor",
                ProjectImageUrl: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?cs=srgb&dl=architecture-buildings-city-325185.jpg&fm=jpg",
                ProjectDescription: "Describing the project here in detail lots and lots and lotsand lotsand lotsand lotsand lotsand lotsand lots of detail",
                ProjectTech: [],
                ProjectHover: false
            },


        ]
    }


    render() {
        const projects = this.state.projects.map((project, i) => (
            <ProjectCard
                projects={project}
                key={i}
            />
        ))
        return (
            <div className="project-container">
                {projects}
            </div>
        );
    }
}

