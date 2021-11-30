import React from "react";
import  ReactDOM  from "react-dom";

import App from "./Components/App"
import GlobalReset from './styles/globalReset.js'


ReactDOM.render(
    <>
        <GlobalReset/>
        <App/>
    </>
        ,document.getElementById("root")
)