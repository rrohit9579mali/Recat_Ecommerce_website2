import React from 'react';
import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const err = useRouteError();  // The hook should be called inside the component
  console.log(err);  // This will log the error object in the console

  // Displaying the error status
  return (
    <div>
      <h2>Error occurred</h2>
      <p>Status: {err.status}</p>  {/* Using optional chaining to avoid errors if err is undefined */}
      <p>Message: {err.error.message}</p>
      <p>Page{err.statusText}</p>
      {/* You can log the entire error object to see other properties in the inspect console */}
    </div>
  );
}

export default Error;
