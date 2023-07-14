import React from "react";
import "../stylesheets/styles.css";
import HamburgerMenu from "./HamburgerMenu";

export default function TopBar() {
    return(
        <div className="topbar">
            <div className="topleft">
                <i class="fa-regular fa-envelope-open" style={{color: "#454545", alignItems:"center;"}}></i>
                <p style={{margin:"10px"}}>Excel list to mail recipients</p>
            </div>

            <div className="topright">
                <HamburgerMenu/>
            </div>
        </div>
    )
}