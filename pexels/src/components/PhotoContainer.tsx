import React, { useState } from "react";
import { Photo, PhotoItem } from "../types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmarks, BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import "../styles/PhotoContainer.scss";

const PhotoContainer = (props: PhotoItem) => {
    let { url, photographer, photographer_url, src, liked, alt, id } = props.item;
    const [favourites, setFavourites] = useState([] as Array<Number>);

    const downloadImg = (e: any) => {
        e.preventDefault();
        saveAs(e.target.href, e.target.href)
    }

    const handleLike = (item: Photo) => {
        let array = favourites;
        let addItem = true;
        array.map((fav: any, index: number) => {
            if(fav === item.id) {
                array.splice(index, 1);
                addItem = false
            }
        })
        if(addItem) {
            array.push(item.id);
        }
        setFavourites([...array]);
        localStorage.setItem("favourites", JSON.stringify(favourites));

        let storage = localStorage.getItem(`fav${item.id}`);
        if(storage == null) {
            localStorage.setItem(`fav${item.id}`, JSON.stringify(item));
        } else {
            localStorage.removeItem(`fav${item.id}`);
        }
    }

    return(
        <div className="photo" style={{gridRowEnd: `span 40`}}>
            <img src={src.original} alt={alt} className="photo-img"/>
            <button className="photo-like-btn photo-action" onClick={() => handleLike(props.item)}> {favourites.includes(id) ? <AiFillHeart /> : <AiOutlineHeart />} </button>
            <a href={photographer_url} className="photo-author-link photo-action">{photographer}</a>
            <a href={src.tiny} className="photo-download-link photo-action" onClick={e => downloadImg(e)}> <BsDownload /> </a>
        </div>
    )
}

export { PhotoContainer }