import React from "react";

import "./sideNav.scss";

const Sidenav = () =>{
    return(
        <div className="side-nav">
            <ul>
                <li>
                    <a href="#/dashboard">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#/Dashboard/News">
                        News List
                    </a>
                </li>
                <li>
                    Products List
                </li>
                <li>
                    <a href="#/Dashboard/AddProduct">
                        Add New Product
                    </a>
                </li>
                <li>
                    Services
                </li>
            </ul>

        </div>
    )
}

export default Sidenav;
