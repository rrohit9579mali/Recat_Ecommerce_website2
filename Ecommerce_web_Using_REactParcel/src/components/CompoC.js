import React, { useContext } from 'react';
import UserContext from '../utils/UseContext';  // Correct import for the context

const CompoC = () => {
  const user = useContext(UserContext);  // Use the UserContext here
  return (
    <div className='mt-3 font-bold text-base block m-3'>
         <b>Name: {user.Name}</b>
         <b className='block'>Name:{user.Email} </b>
        
    </div>
  );
};

export default CompoC;
