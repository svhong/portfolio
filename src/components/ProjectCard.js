import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.projects
        }
    }

    render() {
        //create a map function to map through the different icons in the object and display using a span
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
                    >
                        <div className="image">
                            <img src={this.state.ProjectImageUrl} alt="tetris" />
                        </div>
                        <div className="content">
                            <div className="header">{this.state.ProjectTitle}</div>
                            <div className="description">{this.state.ProjectDescription}</div>
                        </div>
                        <div className="extra content">
                            replace this with the mapped function list
                        </div>
                    </div>
                )}
            </Spring >
        )

    }

}
// takes project objects as props
