import React from "react";
import UserContext from "../utils/UseContext";
class Profileclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userDetails:null
        }
    }
 async componentDidMount(){
              const data=await fetch("https://api.github.com/users/surendrakumarpatel");
              const result=await data.json();
              this.setState({
                userDetails:result
              })
              this.timer=setInterval(()=>{
                console.log("hello");
              },1000)// this is a time 
              // cheack to data is print or not on js inspect
              console.log("ctr is called")
            }

    componentDidUpdate(){
         console.log("component will be Updated")
    }        
    componentWillUnmount(){
        console.log("you can leav to tha page then call this")
       clearInterval( this.timer);
    }
    render() {
        console.log("render Method is called")
        return  this.state.userDetails===null? <h1>Loading...</h1>:(
            <div style={{border:"1px solid black", margin:"3%"}}>
                <h1>This is class Based Component
                  <UserContext.Consumer>
                    { (data)=>(
                        <div>
                        <h1>{data.Name}</h1>
                        <h1>{data.Email}</h1>
                        </div>
                    )
                    }
                  </UserContext.Consumer>
                
                </h1>
                <h1>{this.state.userDetails.company}</h1>
                <h2>{this.state.userDetails.name}</h2>
                <img src={this.state.userDetails.avatar_url}></img>
                <h1 >{this.state.userDetails.url}</h1>
                <h1></h1>
            </div>
        )
    }
}
export default Profileclass;