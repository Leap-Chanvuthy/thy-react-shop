import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";

const Products = () => {
  const { items , addItem, removeItem } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    getAllProducts();
  }, []);

  const handleAddToCart = (id) => {
    const product = products.find((product) => product.id === id);
    addItem(product);
  };

  const handleRemoveFromCart = (id) => {
    removeItem(id);
  };

  console.log(items);


  return (
    <div className="products">
      {loading && <div><h3>Loading....</h3></div>}
      {products && products.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-header">
            <h4>{product.title}</h4>
          </div>
          <div className="card-body">
            <img src={product.image} alt="" />
          </div>
          <div className="card-footer">
            <h5>{product.price} $</h5>
            <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove from cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
