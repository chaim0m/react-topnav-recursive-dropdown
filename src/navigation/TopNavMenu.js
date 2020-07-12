import React from 'react';
import TopMenuItem from "./TopMenuItem"
const menus = require("../config")

const TopNavMenu = () => {

    return (
        <nav className="nav">
            <ul className="menu">
                {menus && menus.map((item,idx) =>
                 <TopMenuItem item={item} key={idx}></TopMenuItem>
             )}
            </ul>
        </nav>

    );
}

export default TopNavMenu;
//
// <div className="navbar navbar-expand-md navbar-dark bg-dark" role="navigation">
//     <div className="collapse navbar-collapse" id="navbarCollapse">
//         <ul className="navbar-nav mr-auto">
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
//                     aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             {menus && menus.map((item,idx) =>
//                 <TopMenuItem item={item} key={idx}></TopMenuItem>
//             )}
//         </ul>
//     </div>
// </div>