import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Nav = (props) => {
    return (
        <>
            {/* <div className="nav-under"> */}
                {/* <div className="item"> */}
                    <NavLink to={props.link} activeclassname="active"> {props.name} </NavLink>
                    {/* </div> */}
            {/* </div> */}

        </>
    )
}
export default Nav;