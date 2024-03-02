import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './about';
import Navbar from './navbar.jsx';
import Contact from './contact';

export default function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
           <Route element={<Home/>}path='/' />
           <Route element={<About/>}path='/about' />
           <Route element={<Contact/>}path='/contact' />
      </Routes>
      </BrowserRouter>
    </>
  )
}

