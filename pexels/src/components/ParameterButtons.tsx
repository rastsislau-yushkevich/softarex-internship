import React from "react";
import { AiOutlineRotateLeft } from "react-icons/ai";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { IoMdColorFilter } from "react-icons/io";
import "../styles/ParameterButtons.scss";

const ParameterButtons = () => {
    return(
        <div className="parameters">
            <button className="parameters-btn"> {<AiOutlineRotateLeft />} Orientation</button>
            <button className="parameters-btn"> {<MdPhotoSizeSelectLarge />} Size</button>
            <button className="parameters-btn"> {<IoMdColorFilter />} Color</button>
        </div>
    )
}

export { ParameterButtons }