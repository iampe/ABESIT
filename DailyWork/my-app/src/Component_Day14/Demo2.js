import React from 'react';
let names =[
    {name:"Ram" ,branch:"IT"},
    {name:"Abhay" ,branch:"AI"},
    {name:"Sita" ,branch:"DS"},
    {name:"Hanuman" ,branch:"CSE"},
];

// export default function Demo2() {
//   return (
//     <div id="Demo2">
//         <h1>Task-2</h1>
//         { names.map(
//             (obj)=>{ 
//                 return <p> Name is {obj.name} and  branch is {obj.branch}.</p>
//                 } 
//          ) 
//         }

//     </div>
//   )
// }

export default function Demo2() {
  return (
    <div id="Demo2">
      <h1>Task-2</h1>
      {names.map((obj, index) => ( // Add unique "key" prop based on index
        <p key={index}>
          Name is {obj.name} and branch is {obj.branch}.
        </p>
      ))}
    </div>
  );
}

