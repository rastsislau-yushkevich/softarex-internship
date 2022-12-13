import React from "react";
import { PhotoItem } from "../types";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarks, BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import "../styles/PhotoContainer.scss";

const PhotoContainer = (props: PhotoItem) => {
    const { url, photographer, photographer_url, src, liked, alt } = props.item;

    const downloadImg = (e: any) => {
        e.preventDefault();
        console.log("asd")
        saveAs(e.target.href, e.target.href)
    }

    return(
        <div className="photo">
            <img loading="lazy" src={src.original} alt={alt} className="photo-img"/>
            <button className="photo-collect-btn photo-action"> <BsBookmarks /> </button>
            <button className="photo-like-btn photo-action"> <AiOutlineHeart /> </button>
            <a href={photographer_url} className="photo-author-link photo-action">{photographer}</a>
            <a href={src.original} className="photo-download-link photo-action" onClick={e => downloadImg(e)}> <BsDownload /> </a>
        </div>
    )
}

export { PhotoContainer }