import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./Components/App"
import GlobalReset from './styles/globalReset.js'


ReactDOM.render(
    <Router>
        <GlobalReset/>
        <App/>
    </Router>
        ,document.getElementById("root")
)