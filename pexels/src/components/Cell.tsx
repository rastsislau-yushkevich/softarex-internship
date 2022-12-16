import React from "react";
import { PhotoContainer } from "./PhotoContainer";

export const Cell = ({ columnIndex, rowIndex, data, style }) => {
  console.log(data)
  const item = data[rowIndex][columnIndex];
  console.log("item", item)
  return(
  <div
    style={style}
  >
    <PhotoContainer item={item}/>
  </div>
)};