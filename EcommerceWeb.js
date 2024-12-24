import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import { ProductCard } from "./src/components/Product";
import {Styleproduct} from "./src/components/Product";
import {ProductData} from "./src/utils/FakeData"
// Fake product data

  

// Main App Component
const App = () => (
  <div>
    <Navbar/>
    <h1>Product List</h1>
    <Styleproduct/>
  </div>
);


// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
 