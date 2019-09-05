import React from "react";

export default class Clock extends React.Component {
    state = {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.date}</h1>
                <h1 style={clockStyle}>{this.state.time}</h1>
            </div>

        )
    }
}

const clockStyle = {
    fontFamily: "Pixel",
    display: "inline-block",
    width: "275px",
    color: "white",
    background: "slateblue"
}
