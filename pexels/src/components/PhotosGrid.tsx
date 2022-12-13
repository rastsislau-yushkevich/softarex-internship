import React, { LegacyRef, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { PhotoContainer } from "./PhotoContainer";
import "../styles/PhotosGrid.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux/redux_types";
import { loadPhotos } from "../redux/photos/photo_action_creators";
import { store } from "../redux/store";
import { useLoadPhotos } from "../hooks/useLoadPhotos";

const PhotosGrid = () => {
    const photos = useSelector((state: StoreState) => state.photos.photos);
    const query = useSelector((state: StoreState) => state.photos.query);


    // const [page, setPage] = useState(1);
    // const { loading } = useLoadPhotos(page);

    // const observer = useRef<IntersectionObserver | null>();
    // const lastPhotoRowRef = useCallback((row: Element) => {
    //     if(loading) return;
    //     if(observer.current) observer.current.disconnect();
    //     observer.current = new IntersectionObserver(entries => {
    //         if(entries[0].isIntersecting) {
    //             setPage(page => page+1)
    //         }
    //     })
    //     if(row) observer.current.observe(row)
    // }, [page]) as LegacyRef<HTMLDivElement>;
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos({page: 1, perPage: 9, query}))
    }, [query])

    if(!photos || photos.length === 0) {
        return null
    }

    const testData = [...photos];

    const photosArr = [];
    const newArrLength = testData.length/3;

    while(testData.length) {
        photosArr.push(testData.splice(0, newArrLength));
    }

    return(
        <div className="photos-grid">
            {photosArr.map((photo, index) => {
                 if(photosArr.length === index+1) {
                    return (
                        <div key={index} className="photos-grid-column">
                            {photo.map((item, index) => <PhotoContainer key={item.id} item={item}/>)}
                        </div>
                    )
                } else {
                    return(
                        <div key={index} className="photos-grid-column">
                            {photo.map((item, index) => <PhotoContainer key={item.id} item={item}/>)}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export { PhotosGrid }