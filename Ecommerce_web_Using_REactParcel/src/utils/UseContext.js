import React, { createContext } from 'react';

// Create the Context
const UserContext = createContext({
  Name: "Rohit Mali",
  Email: "rohit123@gmail.com"
});

// Export the Context so it can be used in other components
export default UserContext;