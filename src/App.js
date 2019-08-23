import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";
import TopMenu from "./components/TopMenu";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="viewArea">
                    <TopMenu />
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={ContactMe} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;