import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddItem } from "../../redux/cartSlice";

const Product = ({ image, name, price, category, id }) => {
  const dispatch = useDispatch();

  const handleCartButton = (e) => {
    e.preventDefault(); // Prevent Link navigation
    dispatch(
      AddItem({
        id,
        image,
        name,
        price,
        category,
      })
    );
  };

  return (
    <Link to={`/product/${id}`} className="block text-black no-underline">
      <div className="group m-[10px] flex h-[350px] w-full flex-col items-center justify-center gap-[6px] overflow-hidden rounded-[11px] border-2 border-[rgb(210,206,206)] p-5 text-center text-base font-bold shadow-[6px_6px_20px_rgb(67,66,66)] transition-shadow duration-300 hover:shadow-[10px_10px_35px_rgba(0,0,0,0.35)]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-[140px] w-[150px] rounded-xl border-2 border-[rgb(210,206,206)] object-contain p-[10px]"
        />

        <span className="line-clamp-2">{name}</span>

        <span>{category}</span>
        <span>₹{price}</span>

        <button
          type="button"
          onClick={handleCartButton}
          className="flex h-[30px] p-2.5 items-center justify-center rounded-xl border-2 border-[rgb(210,206,206)] bg-transparent transition-all duration-300 hover:border hover:border-[rgb(220,223,232)] hover:bg-[rgb(216,225,233)]"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Product;