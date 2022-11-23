import React from "react";
import { SearchBar } from "./SearchBar";
import "../styles/IndexHeader.scss";

const IndexHeader = () => {
    return(
        <header className="header">
            <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt="" className="header-bg" />
            <div className="header-inner">
                <h2 className="header-inner__text">The best free stock photos, royalty free images & videos shared by creators.</h2>
                <div className="header-inner__search"><SearchBar /></div>
                <div className="header-inner__trending">Trending: </div>
            </div>
            <span className="header-author">Photo by </span>
        </header>
    )
}

export { IndexHeader }