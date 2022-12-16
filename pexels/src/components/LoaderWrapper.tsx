import React from "react";
import InfiniteLoader from "react-window-infinite-loader";
import { Photo } from "../types";
import { PhotoContainer } from "./PhotoContainer";
import { VariableSizeGrid as Grid, FixedSizeList as List } from "react-window";

const LoaderWrapper = (hasNextPage: any, isNextPageLoading: boolean, items: Photo[], loadNextPage: any) => {
    // const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

    const Cell = ({style, item}: any) => {
        return(
            <div className="photo-grid-row" style={style}>
                <PhotoContainer item={item}/>
            </div>
        )
    }

    return(
        <InfiniteLoader 
            isItemLoaded={isItemLoaded}
            itemCount={1000}
            loadMoreItems={loadMoreItems}
        >
            {({ onItemsRendered, ref }) => (
                // <Grid
                //     columnCount={3}
                //     columnWidth={() => 460}
                //     height={1000}
                //     rowCount={1000}
                //     rowHeight={() => 500}
                //     width={1140}
                // >
                //     {Cell}
                // </Grid>
                <List
                    className="List"
                    height={150}
                    itemCount={1000}
                    itemSize={30}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                    width={300}
                >
                    {Cell}
                </List>
            )}
        </InfiniteLoader>
    )
}

export { LoaderWrapper }