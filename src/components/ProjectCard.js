import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import Tooltip from "react-simple-tooltip";

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.projects,
            visible: false
        }
    }

    async ProjectCardClicked() {
        await this.setState({ visible: true });
        this.props.onClick(this.state);
    }

    render() {
        //create a map function to map through the different icons in the object and display using a span
        const icons = this.state.ProjectTech.map((tech, i) =>
            <Tooltip
                content={tech.Name}
                radius={4}
                key={i}
            >
                <div className="icon-container" key={i}>
                    <img src={tech.Image} alt="icon" />
                </div>
            </Tooltip >
        )

        return (
            <Spring
                from={{ opacity: 0 }}
                to={{
                    opacity: 1
                }}
                config={{
                    delay: 100,
                    duration: 500
                }}>
                {props => (
                    <div
                        style={props}
                        className="project-card ui card"
                        onClick={() => { this.ProjectCardClicked(this.state) }}
                    >
                        <div className="image">
                            <img src={this.state.ProjectImageUrl} alt="tetris" />
                        </div>
                        <div className="content">
                            <div className="header">{this.state.ProjectTitle}</div>
                            <div className="description">{this.state.ProjectDescription}</div>
                        </div>
                        <div className="extra content icon-collection">
                            {icons}
                        </div>
                    </div>
                )
                }
            </Spring >
        )

    }

}
// takes project objects as props
