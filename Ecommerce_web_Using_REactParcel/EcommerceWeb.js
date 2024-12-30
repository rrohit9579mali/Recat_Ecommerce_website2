import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import { Styleproduct } from "./src/components/Product";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import KIDS from "./src/components/KIDS";
import Menu from "./src/components/Menu";
import { Provider } from "react-redux";
import store from "./src/Store/ReduxStore";
// import About from "./src/components/About";
import Card from "./src/components/Card";
// import Grocery from "./src/components/Grocery";
import { Error } from "./src/components/Error";
import UserContext from "./src/utils/UseContext";
import UseMemoHook from "./src/components/UseMemoHook";
import UseRefHook from "./src/components/UseRefHook";
import FromValidation from "./src/components/FromValidation";
// import DyRoutSingleproduct from "./src/components/DyRoutSingleproduct";

const Grocery = lazy(() => import(`./src/components/Grocery`))
const DyRoutSingleproduct = lazy(() => import(`./src/components/DyRoutSingleproduct`))
const About = lazy(() => import(`./src/components/About`))
const Styleproduct = lazy(() => import(`./src/components/Product`))
// Main App Component
const App = () => {
  // State for user profile name
  const [userProfile, setuserProfile] = useState("Rohit Mali");

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ Name: userProfile || "", setuserProfile }}>
        <div>
          <Navbar /> {/* Your Navbar component */}
          <Outlet /> {/* This renders the appropriate child route */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // Error handling component for any route errors
    children: [
      {
        path: "/",
        element: <Suspense fallback={<h1>Loading...</h1>}><Styleproduct /></Suspense>, // Render Styleproduct for "/"
      },
      {
        path:"/Login",
        element:<FromValidation/>
      },
      {
        path: "/KIDS",
        element: <KIDS />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/About",
        element: <Suspense fallback={<h>Loading</h>}> <About /></Suspense>,
      },
      {
        path: "/Card",
        element: <Card />,
      },
      {
        path: "/products/:productID/", // Dynamic route for product details
        element: <Suspense><DyRoutSingleproduct /></Suspense>,
      },
      {
        path:"/Memo",
        element:<UseMemoHook/>
      },
      {
        path:"/UseRef",
        element:<UseRefHook/>
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      }
    ],
  },
]);
// Render the App with RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
