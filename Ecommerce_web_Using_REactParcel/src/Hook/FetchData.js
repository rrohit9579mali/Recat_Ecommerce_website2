import { useEffect, useState } from "react";

const useProductData = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (productID) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const result = await response.json();
        setProductData(result); // Set the product data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchData();
  }, []);

  return { productData, loading }; // Return the data and loading state
};

export default useProductData;
