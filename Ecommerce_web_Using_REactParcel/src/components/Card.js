import React from "react";
import { useSelector } from "react-redux";

const Card = () => {
    // Fetching cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <div className="border border-black-800  text-black-500 flex flex-row p-4 m-10">
            <h1 className="font-extrabold text-black font-medium text-2xl py-5 px-10 underline">
                Total Cart: {cartItems.length}
            </h1>

            {/* Displaying cart items */}
            {cartItems.length > 0 ? (
                cartItems.map((product, index) => (
                     <div className="bg-white shadow-md rounded-lg m-10 w-full hover:shadow-lg transition border border-blue-900 duration-200">
                          <img
                            className="w-full h-40 object-contain rounded-md mb-4 border border-black-700"
                            src={product.image || "https://via.placeholder.com/150"}
                            alt={product.title || "No Title"}
                          />
                    
                          <h4 className="text-lg font-semibold mb-2 shadow-md">{product.title}</h4>
                          <p className="text-sm text-gray-600">
                            <strong>Category:</strong> {product.category}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Price:</strong> ${product.price}
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
                          </p>
                    
                        </div>
                      
                ))
            ) : (
                <p className="text-lg text-gray-500">No items in the cart.</p>
            )}
        </div>
    );
};

export default Card;
