import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";


export default class Projects extends Component {
    state = {
        projects: [
            {
                ProjectTitle: "React Hook Blocks",
                ProjectImageUrl: "",
                ProjectDescription: "Describing the project here in detail",
                ProjectTech: "These types of technologies were used"
            }
        ]
    }

    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{
                    delay: 100,
                    duration: 500
                }}>
                {props => (
                    <div style={props} className="page-content">
                        Projects coming soon
                    </div>
                )
                }
            </Spring>
        );
    }
}

