import { useState } from "react";
export default function ProductCard({ product }) {
  
  
  const [countimg, setCountImg] = useState (0);
  const [showDescription, setShowDescription] = useState (false);
  const [productCount, setProductCount] = useState (0);

  const handleAddToCartClick = () => {
    setProductCount(productCount + 1);
    alert(`you added ${productCount + 1} to your cart`);
  };
  
  const toggleDescription = () => {
    setShowDescription (!showDescription);
  

  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[countimg] + " " + product.name}
          alt={product.name}
        />
        <button onClick={() => setCountImg (countimg + 1)} disabled = {countimg >= product.imageUrls.length -1}>Next</button>
        <button onClick={() => setCountImg (countimg - 1 )} disabled = {countimg <= 0}>Previous</button>
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
