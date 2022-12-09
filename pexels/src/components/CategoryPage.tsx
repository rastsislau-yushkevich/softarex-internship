import React from "react";
import "../styles/CategoryPage.scss";
import { ParameterButtons } from "./ParameterButtons";
import { PhotosGrid } from "./PhotosGrid";

const CategoryPage = () => {
    return(
        <div className="category">
            <div className="category-settings">
                <ParameterButtons />
            </div>
            <h2 className="category-header">
                Header
            </h2>
            <PhotosGrid />
        </div>
    )
}

export { CategoryPage }