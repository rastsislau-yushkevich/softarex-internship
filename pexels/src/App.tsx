import React from 'react';
import { Route, Routes } from 'react-router';
import { CategoryPage } from './pages/CategoryPage';
import { IndexHeader } from './components/IndexHeader';
import { IndexPage } from './pages/IndexPage';
import { Navigation } from './components/Navigation';
import { ParameterButtons } from './components/ParameterButtons';
import { PhotoContainer } from './components/PhotoContainer';
import { PhotosGrid } from './components/PhotosGrid';
import { SearchBar } from './components/SearchBar';
import "./styles/App.scss"

function App() {
  return (
    <div className="App" style={{height: "400vh"}}>
      <Navigation />
      <Routes>
        <Route path='/' element={<IndexPage />}/>
        <Route path='/category' element={<CategoryPage />}/>
      </Routes>
    </div>
  );
}

export default App;
