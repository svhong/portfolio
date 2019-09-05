import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Rodal from "rodal"


// importing the icons to put in state
import reactIcon from "../images/react.png";
import styledIcon from "../images/styledcomponents.png";
import hooksIcon from "../images/hooks.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import laravelIcon from "../images/laravel.png";
import bootstrapIcon from "../images/bootstrap.png";
import phpIcon from "../images/php.png";
import mysqlIcon from "../images/mysql.png";
import nodeIcon from "../images/node.png";
import expressIcon from "../images/express.png";
import doIcon from "../images/do.png";
import jsIcon from "../images/js.png";
import wixIcon from "../images/wix.png";

// importing images
import blocksImage from "../images/blocks.PNG";
import baconImage from "../images/bacon.PNG";
import blogeditorImage from "../images/blogeditor.PNG";
import poracImage from "../images/porac.PNG";
import atosImage from "../images/atos.PNG";

// import CSS
import 'rodal/lib/rodal.css';

export default class Projects extends Component {
    // Make content changes inside the state
    //refactor with hooks?
    state = {
        projects: [
            {
                ProjectTitle: "Blog Editor",
                ProjectImageUrl: `${blogeditorImage}`,
                ProjectDescription: "A blog post editor where user can post and view their blog!",
                ProjectTech: [
                    {
                        Name: "Laravel",
                        Image: `${laravelIcon}`
                    },
                    {
                        Name: "PHP7",
                        Image: `${phpIcon}`
                    },
                    {
                        Name: "MySQL DataBase",
                        Image: `${mysqlIcon}`
                    },
                    {
                        Name: "ReactJS",
                        Image: `${reactIcon}`
                    },
                    {
                        Name: "Bootstrap 4",
                        Image: `${bootstrapIcon}`
                    },
                ],
                ProjectUrl: "https://github.com/svhong/blogeditor",
                ProjectDemo: "https://blogeditor.herokuapp.com"
            },
            {
                ProjectTitle: "React Hook Blocks",
                ProjectImageUrl: `${blocksImage}`,
                ProjectDescription: "A popular block game project to learn and understand the intricacies of React Hooks.",
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
                ProjectDemo: "https://www.google.com"
            },
            {
                ProjectTitle: "Atos Austin BJJ",
                ProjectImageUrl: `${atosImage}`,
                ProjectDescription: "Fully Responsive Client's website. With email blasting and clientele database management",
                ProjectTech: [
                    {
                        Name: "Wix",
                        Image: `${wixIcon}`
                    },
                    {
                        Name: "Html5",
                        Image: `${htmlIcon}`
                    },
                    {
                        Name: "CSS3",
                        Image: `${cssIcon}`
                    },
                    {
                        Name: "JavaScript",
                        Image: `${jsIcon}`
                    }
                ],
                ProjectUrl: "https://github.com/svhong/",
                ProjectDemo: "https://www.atosaustinbjj.com"
            },
            {
                ProjectTitle: "Bacon API Delivery",
                ProjectImageUrl: `${baconImage}`,
                ProjectDescription: "A meaty lorem API delivery service with lightning fast delivery!",
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
                ProjectDemo: "https://www.google.com"
            },
            {
                ProjectTitle: "PORAC Insurance",
                ProjectImageUrl: `${poracImage}`,
                ProjectDescription: "Fully Responsive reboot of client's outdated website. Made with functional components and served with ExpressJS on Digital Ocean",
                ProjectTech: [
                    {
                        Name: "React",
                        Image: `${reactIcon}`
                    },
                    {
                        Name: "Express",
                        Image: `${expressIcon}`
                    },
                    {
                        Name: "NodeJS",
                        Image: `${nodeIcon}`
                    },
                    {
                        Name: "Digital Ocean",
                        Image: `${doIcon}`
                    }
                ],
                ProjectUrl: "https://github.com/svhong/",
                ProjectDemo: "https://www.poracinsurance.org"
            },
        ],
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
                    measure="%"
                    height={65}
                    width={70}
                >
                    <h1 className="modal-header">{project.ProjectTitle}</h1>
                    <hr />
                    <div className="modal-image">
                        <img src={project.ProjectImageUrl} alt="pic" />
                    </div>
                    <hr />
                    <h4 className="modal-content">{project.ProjectDescription}</h4>
                    <div className="button-container">
                        <button className="ui inverted primary button" onClick={() => { this.handleModalClick(project.ProjectUrl) }}> <i className="github icon button-icon"></i> GitHub </button>
                        <button className="ui inverted green button" onClick={() => { this.handleModalClick(project.ProjectDemo) }}><i className="gamepad icon"></i> Demo</button>
                    </div>
                </Rodal>
            </div>
        );
    }
}

