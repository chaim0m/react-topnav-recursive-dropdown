import React from "react"
import SubItemMenu from "./SubItemMenu"

const SubElement  = ({item}) => {
    return (
        <>
            {item && !item.items &&
            <li className="menu-item"><a href="">{item.name}</a></li>
            }

                {item && item.items &&
                <li className="menu-item has-children">
                    <a href="">
                        {item.name}
                        <span className="dropdown-icon"></span>
                    </a>
                    <SubItemMenu items={item.items}></SubItemMenu>
                </li>
                }
                </>
    )
}

export default SubElement;












