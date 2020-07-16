import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Rodal from "rodal";

// importing the icons to put in state
import reactIcon from "../images/react.png";
import styledIcon from "../images/styledcomponents.png";
import hooksIcon from "../images/hooks.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";

// importing images
import blocksImage from "../images/blocks.PNG";
import baconImage from "../images/bacon.PNG";

// import CSS
import 'rodal/lib/rodal.css';

export default class Projects extends Component {
    // Make content changes inside the state
    //refactor with hooks?
    state = {
        projects: [
            {
                ProjectTitle: "React Hook Blocks",
                ProjectImageUrl: `${blocksImage}`,
                ProjectDescription: "A popular block game project to learn and understand the intricacies of React Hooks.",
                ProjectDetails: "This project was started to get more experience and a broader understanding of hooks. It's styled with Styled Components.",
                ProjectTech: [
                    {
                        Name: "React Hooks",
                        Image: `${hooksIcon}`
                    },
                    {
                        Name: "ReactJS",
                        Image: `${reactIcon}`
                    },
                    {
                        Name: "Styled Components",
                        Image: `${styledIcon}`
                    }

                ],
                ProjectUrl: "https://github.com/svhong/reactblocks",
                ProjectDemo: "https://blocks.seanhongdev.com"
            },
            {
                ProjectTitle: "Bacon API Delivery",
                ProjectImageUrl: `${baconImage}`,
                ProjectDescription: "A meaty lorem API delivery service with lightning fast delivery!",
                ProjectDetails: "Utilizing Bacon Lorem's API, this application is made with ReactJS. Inputs build the query and the data is fetched using axios.",
                ProjectTech: [
                    {
                        Name: "ReactJS",
                        Image: `${reactIcon}`
                    },
                    {
                        Name: "HTML5",
                        Image: `${htmlIcon}`
                    },
                    {
                        Name: "CSS3",
                        Image: `${cssIcon}`
                    },
                ],
                ProjectUrl: "https://github.com/svhong/textgenreact",
                ProjectDemo: "https://bacon.seanhongdev.com"
            },
        ],
        loading: false,
        visible: false,
        modalData: {}
    }

    handleClick = (state) => {
        if (state) {
            this.setState({
                visible: true,
                modalData: state
            });
        }
    }

    handleClose() {
        this.setState({ visible: false });
    }

    handleModalClick(url) {
        window.open(url);
    }

    render() {
        const projects = this.state.projects.map((project, j) => (
            <ProjectCard
                projects={project}
                key={j}
                onClick={this.handleClick}
            />
        ))

        const project = this.state.modalData;
        return (
            <div className="project-container">
                {projects}
                <Rodal
                    visible={this.state.visible}
                    onClose={this.handleClose.bind(this)}
                    closeOnEsc={false}
                    measure="px"
                    height={455}
                    width={500}
                >
                    <h1 className="modal-header">{project.ProjectTitle}</h1>
                    <hr />
                    <div className="modal-content">
                        {project.ProjectDetails}
                    </div>
                    <div className="button-container">
                        <button className="ui inverted primary button" onClick={() => { this.handleModalClick(project.ProjectUrl) }}> <i className="github icon button-icon"></i> GitHub </button>
                        <button className="ui inverted green button" onClick={() => { this.handleModalClick(project.ProjectDemo) }}><i className="gamepad icon"></i> Live</button>
                    </div>
                </Rodal>
            </div>
        );
    }
}

