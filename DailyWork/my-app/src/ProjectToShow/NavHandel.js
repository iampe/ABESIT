import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./NavLayout";
import Home from "./Home";
import Day1 from "./Day1";
import CardPicture from '../ProjectToShow/CardPicture';

export default function NavHandel() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="day1//*" element={<Day1/>}/>
          <Route path="visit/" element={<CardPicture/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}


