import React from 'react';
import { Route, Routes } from 'react-router';
import { IndexHeader } from './components/IndexHeader';
import { Navigation } from './components/Navigation';
import { SearchBar } from './components/SearchBar';
import "./styles/App.scss"

function App() {
  return (
    <div className="App">
      {/* <SearchBar/> */}
      <Navigation />
      <IndexHeader />
    </div>
  );
}

export default App;
