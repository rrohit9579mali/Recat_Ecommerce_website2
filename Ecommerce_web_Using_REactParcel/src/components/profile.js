import { useState } from "react";

const Profile=(props)=>{
    const [count,setcount]=useState(0)
    const {Name,Address,Email,education}=props;
    return(
        <div style={{border:"1px solid black", margin:"3%"}}>

             <h1>This is Function Based Based Component</h1>
            <h1>Nmae:{Name}</h1>
            <h1>Address:{Address} </h1>
            <h1>Gmail: {Email}</h1>
            <h1>Skill:{education} </h1>
            <h2>{count}</h2>
            <button onClick={()=>{
                setcount(count+1)
            }}>Incriment count</button>
        </div>
    )
}
export default Profile;