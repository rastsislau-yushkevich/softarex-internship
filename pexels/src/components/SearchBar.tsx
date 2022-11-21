import React from "react";
import "../styles/SearchBar.scss"
import { BiSearchAlt2 } from "react-icons/bi"

const SearchBar = () => {
    return(
        <div className="search-bar">
            <input className="search-bar__input" type="text" name="" id="" placeholder="Search for free photos"/>
            <button className="search-bar__btn"><BiSearchAlt2 /></button>
        </div>
    )
}

export { SearchBar }