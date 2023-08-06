import React from 'react';
//import './App.css';
import '../App.css';





export default function InlineCSS() {
  return (
    <>
    <h1 style = { {color:"red",  border: "5px solid yellow", textAlign: "center"} }>InlineCSS</h1>

    <h1>My First Heading</h1>
    <h1 className="Abc">External CSS</h1>
    </>
  )
}
