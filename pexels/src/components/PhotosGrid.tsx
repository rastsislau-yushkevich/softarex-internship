import React, { LegacyRef, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { PhotoContainer } from "./PhotoContainer";
import "../styles/PhotosGrid.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux/redux_types";
import { loadPhotos } from "../redux/photos/photo_action_creators";
import InfiniteLoader from "react-window-infinite-loader";
import { store } from "../redux/store";
import { LoaderWrapper } from "./LoaderWrapper";
import { VariableGrid } from "./VariableGrid";
import InfiniteScroll from "react-infinite-scroll-component";

const PhotosGrid = () => {
    const photos = useSelector((state: StoreState) => state.photos.photos);
    const query = useSelector((state: StoreState) => state.photos.query);
    const currentResponse = useSelector((state: StoreState) => state.photos.currentResponse);
    // const isNextPageLoading = useSelector((state: StoreState) => state.photos.isLoading);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const loadMorePhotos = async () => {
        await dispatch(loadPhotos({page, perPage: 3, query}));
        setPage(page+1);
    }

    return(
        <div className="photos-grid">
            {/* <VariableGrid /> */}
                <InfiniteScroll
                    dataLength={photos.length}
                    next={loadMorePhotos}
                    hasMore={!!currentResponse.next_page}
                    loader={<h4>Loading...</h4>}
                    >
                    {photos.map((item) => <PhotoContainer key={item.id} item={item}/>)}
                </InfiniteScroll>
        </div>
    )
}

export { PhotosGrid }