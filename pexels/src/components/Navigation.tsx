import React from "react";
import { Link } from "react-router-dom";
import { SiPexels } from "react-icons/si"
import "../styles/Navigation.scss"
import { SearchBar } from "./SearchBar";

const Navigation = () => {
    return(
        <nav className="navigation">
            <div className="navigation-logo"><Link to=""><SiPexels />Pexels</Link></div>
            <SearchBar />
            <ul className="navigation-menu">
                <li className="navigation-menu__item"><Link to="">Explore</Link></li>
                <li className="navigation-menu__item"><Link to="">License</Link></li>
                <li className="navigation-menu__item"><Link to="">Upload</Link></li>
            </ul>
        </nav>
    )
}

export { Navigation }