import React from "react"
import SubItemMenu from "./SubItemMenu"


const TopMenuItem = ({item}) => {

    return (
        <li className={item.items ? "menu-item has-children": "menu-item"}>
            <a>{item.name}</a>
            {item.items && item.items.length > 0 &&
                <>
                    <SubItemMenu items={item.items}></SubItemMenu>
                </>
            }
        </li>
    )
}

export default TopMenuItem;