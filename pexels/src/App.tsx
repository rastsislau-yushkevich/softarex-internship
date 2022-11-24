import React from 'react';
import { Route, Routes } from 'react-router';
import { IndexHeader } from './components/IndexHeader';
import { Navigation } from './components/Navigation';
import { PhotoContainer } from './components/PhotoContainer';
import { SearchBar } from './components/SearchBar';
import "./styles/App.scss"

function App() {

  const photoItem = {
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
  }

  return (
    <div className="App">
      {/* <SearchBar/> */}
      <Navigation />
      <IndexHeader />
      <PhotoContainer item={photoItem}/>
    </div>
  );
}

export default App;
