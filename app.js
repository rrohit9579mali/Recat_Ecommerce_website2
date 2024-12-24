import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" for createRoot

const age = 21;

// JSX Component
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{age}</h2>
      <Heading /> {/* Calling the Heading component */}
      <D/>
    </div>
   
  );
};
// Heading Component
const Heading = () => {
  return <h1>Good Morning and Good Night</h1>;
};
// Rendering the App Component

const A=()=>{
  return <h1>Good Morning</h1>;
}
const B=()=><h1>Good Afternoone</h1>;

const C=()=>(
  <h1>Hello World </h1>
)
//  how to use function  inside function usnin jsx 

const D =() =>{
  return (
    <>
   <A/>,
   <B/>,
   <B/>
   </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root")); // Pass the ID as a string
root.render(<App />); // Render the App component
