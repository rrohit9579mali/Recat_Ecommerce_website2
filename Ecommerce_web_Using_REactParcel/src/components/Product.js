import { Link } from "react-router-dom";
import SkeletonCard from "./skelatonCard";
import useProductData from "../Hook/FetchData"; // Import the custom hook
import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UseContext";
import { addItem } from "../Store/ScliceReducer";
import { useDispatch } from "react-redux";
// ProductCard Component
// ProductCard Component
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleSelector = () => {
    dispatch(addItem(product)); // Pass the product as payload to the addItem action
  };

  return (
    <div className="bg-white shadow-md rounded-lg  p-4 hover:shadow-lg transition border border-blue-900 duration-200">
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

      <button 
        className="border border-purple-700 bg-green-500 rounded-md w-12 mt-3"
        onClick={handleSelector} // Add product to cart on click
      >
      <Link>ADD</Link> 
      </button>
    </div>
  );
};


// Higher Order Function (HoF)
const HOF = (Component) => {// he Higher Oreder Function hee je commonentes la as a parameter resive karat 
  return (props) => (
    <div>
      <span className="bg-black text-white px-4 py-2 rounded-md">Best Seller</span>
      <Component {...props} />
    </div>
  );
};

const HoFComponent = HOF(ProductCard);

// Styleproduct Component
export const Styleproduct = () => {
  const { productData, loading } = useProductData(); // Use the custom hook
  const [Searchtext, setSearchtext] = useState(""); // State for search text
  const [filteredData, setFilteredData] = useState([]);
  const user=useContext(UserContext);
  useEffect(() => {
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(Searchtext.toLowerCase())
    );
    setFilteredData(filteredProducts); // Dynamically filter products based on search text
  }, [Searchtext, productData]);

  const handleTopRatedFilter = () => {
    const filteredProducts = productData.filter((product) => product.rating.rate >= 4);
    setFilteredData(filteredProducts); // Filter for top-rated products
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      {/* Search Input */}
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
        onChange={(e) => setSearchtext(e.target.value)} // Update search text
        value={Searchtext}
        placeholder="Search Products..."
      />
      
      <input
      type="text"
      // bind input value to user.Name
      onChange={(e) => user.setuserProfile(e.target.value)} // update Name on change
    
      className="border border-gray-300 rounded-md mr-6 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
      placeholder="Search Products..."
    />

      {/* Filter Button */}
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md px-4 py-2 mt-4 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        onClick={handleTopRatedFilter} // Filter for top-rated products
      >
        Top Rated Products
      </button>

      {/* Show Skeleton Loader or Product Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
        {loading
          ? [1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-gray-100 animate-pulse rounded-lg p-4">
                <SkeletonCard />
              </div>
            ))
          : filteredData.map((product) => (
              <Link
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4"
                key={product.id}
                to={`/products/:productID/`}
              >
                {
                  product.rating.rate >= 4 ? <HoFComponent product={product}/> : <ProductCard product={product} />
                }
              </Link>
            ))}
      </div>
    </div>
  );
};
