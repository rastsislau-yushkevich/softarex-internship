import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../redux/redux_types";
import "../styles/CategoryPage.scss";
import { ParameterButtons } from "../components/ParameterButtons";
import { PhotosGrid } from "../components/PhotosGrid";

const CategoryPage = () => {
    const query = useSelector((state: StoreState) => state.photos.query);

    return(
        <div className="category">
            <div className="category-settings">
                <ParameterButtons />
            </div>
            <h2 className="category-header">
                {query}
            </h2>
            <PhotosGrid />
        </div>
    )
}

export { CategoryPage }