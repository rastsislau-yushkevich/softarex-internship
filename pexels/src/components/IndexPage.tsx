import React from "react";
import { IndexHeader } from "./IndexHeader";
import { PhotosGrid } from "./PhotosGrid";

const IndexPage = () => {
    return(
       <>
        <IndexHeader />
        <PhotosGrid />
       </>
    )
}

export { IndexPage }