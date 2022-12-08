import React from 'react';
import { Route, Routes } from 'react-router';
import { IndexHeader } from './components/IndexHeader';
import { IndexPage } from './components/IndexPage';
import { Navigation } from './components/Navigation';
import { PhotoContainer } from './components/PhotoContainer';
import { PhotosGrid } from './components/PhotosGrid';
import { SearchBar } from './components/SearchBar';
import "./styles/App.scss"

function App() {
  return (
    <div className="App" style={{height: "200vh"}}>
      <Navigation />
      {/* <IndexPage /> */}
    </div>
  );
}

export default App;
