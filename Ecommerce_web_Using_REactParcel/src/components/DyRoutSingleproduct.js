import React, { useEffect, useState } from "react";
import SkeletonCard from "./skelatonCard";
import { useParams } from "react-router-dom";

const DyRoutSingleproduct = () => {
    const [singledata, setsingledata] = useState(null);
    const { productId } = useParams();
    console.log(productId);

    useEffect(() => {
        fetchData();
    }, []); // Add productId as a dependency to refetch data when it changes

    const fetchData = async (productID) => {
        const data = await fetch(`https://fakestoreapi.com/products/5`);
        const result = await data.json();
        setsingledata(result);
    };

    console.log(singledata);
    return singledata === null ? (
        <SkeletonCard />
    ) : (
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-200">
            <img
                className="mx-auto h-48 w-36 object-contain mb-4"
                src={singledata.image}
                alt={singledata.title}
            />
            <div className="text-center mb-2">
                <span className="block text-blue-600 font-semibold">Title:</span>
                <span className="text-green-600">{singledata.title}</span>
            </div>
            <div className="text-center mb-2">
                <span className="block text-red-600 font-semibold">Category:</span>
                <span className="text-purple-600">{singledata.category}</span>
            </div>
            <div className="mb-2">
                <span className="block text-orange-600 font-semibold">Description:</span>
                <span className="text-blue-600 text-center">{singledata.description}</span>
            </div>
            <div className="mb-2">
                <span className="block text-teal-600 font-semibold">Price:</span>
                <span className="text-darkgreen-600">${singledata.price}</span>
            </div>
            <div>
                <span className="block text-darkblue-600 font-semibold">Rating:</span>
                <span className="text-darkorange-600">{singledata.rating.rate}</span>
            </div>
        </div>
    );
};

export default DyRoutSingleproduct;
