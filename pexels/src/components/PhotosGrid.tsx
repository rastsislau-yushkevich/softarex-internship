import React from "react";
import { PhotoContainer } from "./PhotoContainer";
import "../styles/PhotosGrid.scss";

const PhotosGrid = () => {
    const testData = [{
        "id": 2014423,
        "width": 4032,
        "height": 3024,
        "url": "https://www.pexels.com/photo/scenic-sky-over-rocky-landscape-2014423/",
        "photographer": "Joey F",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#968F88",
        "src": {
            "original": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg",
            "large2x": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Scenic Sky over Rocky Landscape"
      }, {
        "id": 2014327,
        "width": 3456,
        "height": 4608,
        "url": "https://www.pexels.com/photo/beauty-natural-nature-travelling-2014327/",
        "photographer": "Mohammadasim Memon",
        "photographer_url": "https://www.pexels.com/@mohammadasim-memon-988916",
        "photographer_id": 988916,
        "avg_color": "#7D8B99",
        "src": {
            "original": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg",
            "large2x": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of beauty, natural, nature"
    }, {
        "id": 2014337,
        "width": 4288,
        "height": 2848,
        "url": "https://www.pexels.com/photo/blur-bouqe-nikkor-nikon-lens-backgroundblur-2014337/",
        "photographer": "zohaib khan",
        "photographer_url": "https://www.pexels.com/@zohaib-khan-353302",
        "photographer_id": 353302,
        "avg_color": "#819BA2",
        "src": {
            "original": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg",
            "large2x": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of backgroundblur, blur, lens"
    }, {
        "id": 2014423,
        "width": 4032,
        "height": 3024,
        "url": "https://www.pexels.com/photo/scenic-sky-over-rocky-landscape-2014423/",
        "photographer": "Joey F",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#968F88",
        "src": {
            "original": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg",
            "large2x": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Scenic Sky over Rocky Landscape"
      }, {
        "id": 2014327,
        "width": 3456,
        "height": 4608,
        "url": "https://www.pexels.com/photo/beauty-natural-nature-travelling-2014327/",
        "photographer": "Mohammadasim Memon",
        "photographer_url": "https://www.pexels.com/@mohammadasim-memon-988916",
        "photographer_id": 988916,
        "avg_color": "#7D8B99",
        "src": {
            "original": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg",
            "large2x": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014327/pexels-photo-2014327.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of beauty, natural, nature"
    }, {
        "id": 2014337,
        "width": 4288,
        "height": 2848,
        "url": "https://www.pexels.com/photo/blur-bouqe-nikkor-nikon-lens-backgroundblur-2014337/",
        "photographer": "zohaib khan",
        "photographer_url": "https://www.pexels.com/@zohaib-khan-353302",
        "photographer_id": 353302,
        "avg_color": "#819BA2",
        "src": {
            "original": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg",
            "large2x": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014337/pexels-photo-2014337.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of backgroundblur, blur, lens"
    }]

    const photosArr = [];
    const newArrLength = testData.length/3;
    console.log(newArrLength)

    while(testData.length) {
        photosArr.push(testData.splice(0, newArrLength));
    }

    return(
        <div className="photos-grid">
            {photosArr.map((photo, index) => <>
                <div key={index} className="photos-grid-column">
                    {photo.map((item) => <PhotoContainer key={item.id} item={item}/>)}
                </div>
            </>)}
        </div>
    )
}

export { PhotosGrid }