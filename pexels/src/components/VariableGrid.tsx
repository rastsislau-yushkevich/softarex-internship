import React from "react";
import { Cell } from "./Cell";
import { VariableSizeGrid as Grid } from 'react-window'
import { ReactWindowScroller } from 'react-window-scroller'
import { PhotoContainer } from "./PhotoContainer";
import AutoSizer from "react-virtualized-auto-sizer";
import 'react-virtualized/styles.css'; 

const columnWidths = [...new Array(1000)].map(
    () => 460
)
const rowHeights = [...new Array(1000)].map(
    () => 800
)

const VariableGrid = () => {
    const photos = [[{
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      },{
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      }, {
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      }], [{
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      },{
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      }, {
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      }], [{
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      },{
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      }, {
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
          "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
          "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
      }]]

    return(
        // <AutoSizer>
        //     {({height, width}) => (
                <ReactWindowScroller isGrid>
                    {({ ref, outerRef, style, onScroll }) => (
                        <Grid
                            itemData={photos}
                            ref={ref}
                            outerRef={outerRef}
                            style={style}
                            height={window.innerHeight}
                            width={window.innerWidth}
                            // height={height}
                            // width={width}
                            columnCount={3}
                            columnWidth={(index) => columnWidths[index]}
                            rowCount={photos.length}
                            rowHeight={(index) => rowHeights[index]}
                            onScroll={onScroll}
                        >
                            {Cell}
                        </Grid>
                    )}
                </ReactWindowScroller>
        //     )}
        // </AutoSizer>
    )
}

export { VariableGrid }