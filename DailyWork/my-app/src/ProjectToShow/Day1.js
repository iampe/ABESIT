// import React, { useRef } from 'react';
// import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CardPicture from './CardPicture';
// import FirstComponent from "../Component_Day13/FirstComponent";
// import Profile1 from "../Component_Day13/Profile1";
// import Props from "../Component_Day13/Props";
// import Second from "../Component_Day13/Second";

// export default function Day1() {
//     const scrollRef = useRef(null); // Create a ref for scrolling
//     let data = [
//         { title: "Task-1", text: "First Component", urlImg: "Image/task1.png", urlTask: "FirstComponent" , id: "FirstComponent"  },
//         { title: "Task-2", text: "Profile", urlImg: "Image/task2.png", urlTask: "Profile1", id: "Profile1" },
//         { title: "Task-3", text: "Practice of props", urlImg: "Image/task3.png", urlTask: "Props" , id: "Props" },
//         { title: "Task-4", text: "Second Props", urlImg: "Image/task4.png", urlTask: "Second" , id: "Second" },

//     ];
//     return (
//         <>
//             <div className='container mt-5'>
//                 <h1 className='text-center fs-1'>Day-1 Task</h1>
//                 <div className="row">
//                     <CardPicture input={data} />
//                 </div>
//             </div>

//         <div ref={scrollRef}>
//           <Routes>
//             {/* Define routes for each component */}
//             <Route path="FirstComponent" element={<FirstComponent />} />
//             <Route path="Profile1" element={<Profile1 />} />
//             <Route path="Props" element={<Props url={"Image/image2.png"} />} />
//             <Route path="Second" element={<Second />} />
//           </Routes>
//         </div>

//         </>
//     )
// }

import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPicture from './CardPicture';
import FirstComponent from '../Component_Day13/FirstComponent';
import Profile1 from '../Component_Day13/Profile1';
import Props from '../Component_Day13/Props';
import Second from '../Component_Day13/Second';

export default function Day1() {
 
  let data = [
    { title: "Task-1", text: "First Component", urlImg: "Image/task1.png", urlTask: "FirstComponent" , id: "FirstComponent"  },
    { title: "Task-2", text: "Profile", urlImg: "Image/task2.png", urlTask: "Profile1", id: "Profile1" },
    { title: "Task-3", text: "Practice of props", urlImg: "Image/task3.png", urlTask: "Props" , id: "Props" },
    { title: "Task-4", text: "Second Props", urlImg: "Image/task4.png", urlTask: "Second" , id: "Second" },

];

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-center fs-1'>Day-1 Task</h1>
        <div className='row'>
          <CardPicture input={data} />
        </div>
      </div>

      <div ref={scrollRef}></div> {/* This div is used for scrolling */}
      
      <Routes>
        <Route path='FirstComponent' element={<FirstComponent />} />
        <Route path='Profile1' element={<Profile1 />} />
        <Route path='Props' element={<Props url={'Image/image2.png'} />} />
        <Route path='Second' element={<Second />} />
      </Routes>
    </>
  );
}
