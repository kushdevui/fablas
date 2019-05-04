import React from "react";

import "./sideNav.scss";

const Sidenav = () =>{
    return(
        <div className="side-nav">

            <ul>
                <li>
                    Dashboard
                </li>
                <li>
                    News List
                </li>
                <li>
                    Products List
                </li>
                <li>
                    Services
                </li>
            </ul>

        </div>
    )
}

export default Sidenav;
