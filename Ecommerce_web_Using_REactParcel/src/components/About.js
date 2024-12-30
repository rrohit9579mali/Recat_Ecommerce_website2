import React from 'react'
import Profile from './profile';
import Profileclass from './profileclss';

// export const About = () => {
//   return (
//     <div>
//       <Profile Name="rohit mali"Address="At Post Moghan" Email="rohit@gmail.com" education="MERN STACK Devloper"/>
//       <Profileclass Name="rohit mali"Address="At Post Moghan" Email="rohit@gmail.com"/>
//     </div>
//   )
// }
 class About extends React.Component{
  constructor(){
    super();
  }
render(){
  return(
    <div>
    <Profile Name="rohit mali"Address="At Post Moghan" Email="rohit@gmail.com" education="MERN STACK Devloper"/>
    <Profileclass Name="rohit mali"Address="At Post Moghan" Email="rohit@gmail.com"/>
  </div>
  )
}
componentDidCatch(){
}
 }


 export default About;