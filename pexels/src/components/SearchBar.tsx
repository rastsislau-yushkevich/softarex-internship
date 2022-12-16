import React, { useState } from "react";
import "../styles/SearchBar.scss"
import { BiSearchAlt2 } from "react-icons/bi"
import { useDispatch } from "react-redux";
import { loadPhotos, setQuery } from "../redux/photos/photo_action_creators";
import { store } from "../redux/store";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch(setQuery(searchQuery))
        navigate("/category")
        localStorage.setItem("query", searchQuery)
    }

    return(
        <div className="search-bar">
            <input className="search-bar__input" type="text" value={searchQuery ? searchQuery : JSON.stringify(localStorage.getItem("query")).replace(/['"]+/g, '')} name="" id="" placeholder="Search for free photos" onChange={e => setSearchQuery(e.target.value)}/>
            <button className="search-bar__btn" onClick={handleSearch}><BiSearchAlt2 /></button>
        </div>
    )
}

export { SearchBar }