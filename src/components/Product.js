import {ProductData} from "../utils/FakeData";
// ProductCard Component
export const ProductCard = ({ product }) => (
    <div className="Product_Card">
       <img src={product.image || "https://via.placeholder.com/150"} alt={product.title || "No Title"} />
      <h4 className="demo">{product.title}</h4>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
  
  export const Styleproduct=()=>{
      return (
          <div className="product" >
          {ProductData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )
  }
