import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // Fetch the product data from an API.
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [id]);

  return (
    <div>
        <div className="lg:flex sm:flex-row justify-center items-center mt-24 mb-10 gap-40 ">
          <div>
            <div className="card lg:w-[50rem] md:w-[20rem] sm:w-[14rem] bg-base-100 shadow-xl border-2 border-green-50 mx-6">
              <figure className="bg-white">
                <img
                  src={product.image}
                  alt={product.image}
                  className=" w-72 h-80"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <strong>{product.category}</strong>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-outline btn-success" onClick={() => handleAddToCart(product.id)}>Add to cart</button> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-red-500">Hello</h1>
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default ProductDetail;
