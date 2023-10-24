import React from 'react';
import HeaderNav from './components/HeaderNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CardsTask from './components/CardsTask';
import TextTask from './components/TextTask';
import ScrollBarTask from './components/ScrollBarTask';
import PaginationTask from './components/PaginationTask';
import StarsTask from './components/StarsTask';



const App = () => {
  return (
    <div>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cards' element={<CardsTask/>}/>
        <Route path='/texts' element={<TextTask/>}/>
        <Route path='/scrollbar' element ={<ScrollBarTask/>}/>
        <Route path='/pagination' element ={<PaginationTask/>}/>
        <Route path='/stars' element ={<StarsTask/>}/>
      </Routes>
    </div>
  );
};

export default App;