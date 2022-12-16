import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiPexels } from "react-icons/si"
import "../styles/Navigation.scss"
import { SearchBar } from "./SearchBar";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
    const [nav, changeNav] = useState(false)
    const location = useLocation().pathname;

    useEffect(() => {
        const handleScroll = () => {
            changeNav(window.scrollY > 750)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return(
        <div className="nav-wrapper" style={nav || location !== "/" ? {position: "fixed", top: 0, left: 0, backgroundColor: "#fff"} : {}}>
            <nav className="navigation">
            <div className="navigation-logo"><Link to="/"><SiPexels />Pexels</Link></div>
            {nav || location !== "/" ? <div className="navigation-search"><SearchBar /></div> : ""}
            <ul className="navigation-menu">
                <li className="navigation-menu__item"><Link to="/category">Category</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export { Navigation }