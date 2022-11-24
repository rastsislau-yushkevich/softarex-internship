import React from "react";
import { PhotoItem } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmarks, BsBookmarksFill, BsDownload } from "react-icons/bs";
import "../styles/PhotoContainer.scss";

const PhotoContainer = (props: PhotoItem) => {
    const { url, photographer, photographer_url, src, liked, alt } = props.item;
    return(
        <div className="photo">
            <img src={src.portrait} alt={alt} className="photo-img"/>
            <button className="photo-collect-btn photo-action"> <BsBookmarks /> </button>
            <button className="photo-like-btn photo-action"> <AiOutlineHeart /> </button>
            <a href={photographer_url} className="photo-author-link photo-action">{photographer}</a>
            <a href={url} className="photo-download-link photo-action"> <BsDownload /> </a>
        </div>
    )
}

export { PhotoContainer }