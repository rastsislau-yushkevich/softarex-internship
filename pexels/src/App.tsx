import React from 'react';
import { Route, Routes } from 'react-router';
import { Navigation } from './components/Navigation';
import { SearchBar } from './components/SearchBar';
import "./styles/App.scss"

function App() {
  return (
    <div className="App">
      {/* <SearchBar/> */}
      <Navigation />
    </div>
  );
}

export default App;
