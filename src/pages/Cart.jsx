import React from "react";
import {AiFillDelete} from 'react-icons/ai';
import { useCart } from "react-use-cart";
import Footer from "../components/Footer";

const Cart = () => {
  const {
    cartTotal,
    items,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const itemNo = (index) => {
    return index += 1 ;
  }

  return (
    <div>
      <div className="cart py-20">
        {items.length === 0 ? (
          <p></p>
        ) : (
          <div>
          <div className="overflow-x-auto">
              <table className="table">
                {}
                <thead className="text-md font-bold">
                  <tr>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Single price</th>
                    <th>Quanity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {items && items.map((item , index) => (
                  <tr key={item.id}>
                    <th>{itemNo(index)}</th>
                    <th>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </th>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price} $</td>
                    <td>
                    <td className="flex gap-2">
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      {item.quantity}
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </td>
                    </td>
                    <td><button onClick={(() => removeItem(item.id))}><AiFillDelete className="text-red-500 text-lg"/></button></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center px-10 py-6">
          <h2 className="text-xl font-extrabold text">Order Summary </h2>
          {items.length > 0 ? <button className="btn" onClick={(() => emptyCart())}>Clear cart <AiFillDelete className="text-red-400 text-lg"/> </button> : <h1>Your cart is empty</h1>}
        </div>
        <hr/>
        <div className="flex justify-center items-center gap-10 py-2">
          <h2 className="text-xl font-extrabold text px-4">Products :</h2>
          <h2 className="text-xl font-extrabold text py-2 px-4  rounded-sm text-gray-300">{items.length} items</h2>
        </div>
        <hr />
        <div className="flex justify-center items-center gap-10 py-2">
          <h2 className="text-xl font-extrabold text px-4">Subtotal :</h2>
          <h2 className="text-xl font-extrabold text py-2 px-4  rounded-sm text-gray-300">{cartTotal} $</h2>
        </div>
        <hr/>
        <div className="flex justify-center items-center gap-10 py-2">
          <h2 className="text-xl font-extrabold text px-4">Discount :</h2>
          <h2 className="text-xl font-extrabold text py-2 px-4  rounded-sm text-gray-300">0%</h2>
        </div>
        <hr/>
        <h2 className="text-xl text-center font-extrabold text py-2 px-2 bg-neutral text-gray-300 cursor-pointer">Procced Checkout</h2>
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};

export default Cart;
