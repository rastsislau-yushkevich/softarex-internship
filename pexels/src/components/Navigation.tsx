import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiPexels } from "react-icons/si"
import "../styles/Navigation.scss"
import { SearchBar } from "./SearchBar";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
    const [nav, changeNav] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            changeNav(window.scrollY > 750)
        })
    }, [])

    return(
        <div className="nav-wrapper" style={nav ? {position: "fixed", top: 0, left: 0, backgroundColor: "#fff"} : {}}>
            <nav className="navigation">
            <div className="navigation-logo"><Link to="/"><SiPexels />Pexels</Link></div>
            {nav ? <div className="navigation-search"><SearchBar /></div> : ""}
            <ul className="navigation-menu">
                <li className="navigation-menu__item"><Link to="/category">Explore</Link></li>
                <li className="navigation-menu__item"><Link to="/category">License</Link></li>
                <li className="navigation-menu__item"><Link to="/category">Upload</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export { Navigation }