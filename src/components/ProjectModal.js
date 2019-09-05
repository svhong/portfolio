import React, { Component } from "react";
import Rodal from "rodal";

export default class ProjectModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.projects
        }
    }

    handleClose() {
        console.log("It's telling me to close.")
    }

    render() {
        console.log("prereturn")
        return (
            <div>
                <Rodal
                    visible={this.state.ProjectClicked}
                    onClose={this.handleClose}
                >
                    <div>Something in here</div>
                </Rodal>
            </div>
        )
    }
}