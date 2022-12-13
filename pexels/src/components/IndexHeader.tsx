import React, { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import "../styles/IndexHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux/redux_types";
import { loadPhotos } from "../redux/photos/photo_action_creators";
import { store } from "../redux/store";

const IndexHeader = () => {
    const photo = useSelector((state: StoreState) => state.photos.photo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos({page: 2, perPage: 1}))
    }, [])

    if(!photo) return null;

    console.log(store.getState())

    return(
        <header className="header">
            <img src={photo.src?.landscape} alt="" className="header-bg" />
            <div className="header-inner">
                <h2 className="header-inner__text">The best free stock photos, royalty free images & videos shared by creators.</h2>
                <div className="header-inner__search"><SearchBar /></div>
                <div className="header-inner__trending">Trending: </div>
            </div>
            <span className="header-author">Photo by <a href={photo.photographer_url}>{photo.photographer}</a></span>
        </header>
    )
}

export { IndexHeader }