import { useCart } from "react-use-cart";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const { items, addItem, removeItem } = useCart();

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
    toast('Item added to cart');
  };

  console.log(items);

  return (
    <div className="products grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-5 py-20">
      {loading && <div><h3>Loading....</h3></div>}
      {products && products.map(product => (
        <div className="card w-80 bg-base-100 shadow-xl border-2 border-green-50">
          <figure>
            <img 
              src={product.image}
              alt={product.image}
              className="w-40"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{product.category}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-success" onClick={() => handleAddToCart(product.id)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer className="absolute inset-y-0 mx-auto" />
    </div>
  );
};

export default Products;
