import React from "react";
import ReactDOM from "react-dom/client"; // Correct import

// Main Component
const WicProgram = () => {
  return (
    <div>
      <h1>To identify the greeting according to time</h1>
      <h2>Good Morning, Good Afternoon, Good Night</h2>
      <Greeting />
    </div>
  );
};

// Greeting Component
const Greeting = () => {
  const getGreeting = () => {
    const time = new Date().getHours(); // Get the current hour
    if (time < 12) {
      return "Good Morning";
    } else if (time < 16) {
      return "Good Afternoon";
    } else if (time < 20) {
      return "Good Evening";
    } else {
      return "Good Night";
    } 
  };

  const currentTime = new Date().toLocaleTimeString(); // Get current time as a formatted string

  return (
    <div>
      <h3>{getGreeting() }</h3> {/* Render the greeting */}
      <p>Current Time: {currentTime}</p> {/* Render the current time */}
    </div>
  );
};

// Rendering the WicProgram Component
const root = ReactDOM.createRoot(document.getElementById("root")); // Correct usage
root.render(<WicProgram />); // Render the component
