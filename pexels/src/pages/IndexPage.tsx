import React from "react";
import { IndexHeader } from "../components/IndexHeader";
import { PhotosGrid } from "../components/PhotosGrid";

const IndexPage = () => {
    return(
       <>
        <IndexHeader />
        <PhotosGrid />
       </>
    )
}

export { IndexPage }