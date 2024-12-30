import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UseContext";
import { useSelector } from "react-redux";
const Navbar = () => {
    const userProfile=useContext(UserContext);
    const [btnName, setbtnName] = useState("light");
         // Fixed typo in `initialState` and property name
        const createItem=useSelector((store)=>store.cart.cartItems);
    console.log(createItem)
    return (
        <div className="flex justify-between px-10 w-full  shadow-md py-5 mr-20  b-10">
            <h1 className="font-extrabold mr-10>React text-2xl underline hover:text-green-800"> React</h1>
            <ul className="flex  justify-between w-[50%] text-black hover:text-black-800 ">
                <li><Link to="/Menu" className="hover:underline hover:decoration-red-500 decoration-[2px]">Menu</Link></li>
                <li><Link to="/About" className="hover:underline hover:decoration-red-500 decoration-[2px]">About</Link></li>
                <li><Link to="/KIDS" className="hover:underline hover:decoration-red-500 decoration-[2px]">KIDS</Link></li>
                <li><Link to="/Card" className="hover:underline  hover:decoration-red-500 decoration-[2px]">Card-{createItem.length}</Link></li>
                <li><Link to="/Grocery" className="hover:underline hover:decoration-red-500 decoration-[2px]">grocery</Link></li>
                <li><Link to="/Grocery" className="hover:underline hover:decoration-red-500 decoration-[2px]">State</Link></li>
                <h4>{userProfile.Name}</h4>
                <button 
                   className="bg-pink-600 px-6  p1-2 rounded-md text-[#f0f0f0]"
                    onClick={() => {
                        btnName === "light" ? setbtnName("Dark") : setbtnName("light")
                        console.log(btnName)
                    }} >{btnName}
                </button>
            </ul>
        </div>
    )
}

export default Navbar;