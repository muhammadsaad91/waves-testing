import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";


const App = (props) => {
    return (
        <div>
        <NavLink to={props.to}>
        <div className="h2item">
             <img src={props.link} alt="" />
                <h3>{props.name}</h3>
                
        </div>
        </NavLink>
        </div>
    );
    }

export default App;