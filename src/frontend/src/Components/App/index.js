import React from 'react';
import {Routes ,Route} from "react-router-dom";

import Header from '../Header'
import Login from '../Login'
import Signup from '../Signup';
import CreateCows from '../CreateCows';



const App =()=>{

    return(
        <div>
            <Header/>
            <Routes >
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/create" element={<CreateCows/>}/>

            </Routes >

        </div>
    )
}


export default App;