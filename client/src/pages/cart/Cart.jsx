import React, { useEffect } from "react";
import CartCard from "../../components/cart_card/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RemoveAllItem } from "../../redux/cartSlice";

export const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let total = 0;

  return (
    <>
      {items.length === 0 ? (
        <div className="mx-auto flex min-h-[40vh] w-[90vw] flex-col items-center justify-center gap-2 text-center">
          <MdOutlineRemoveShoppingCart className="text-[90px] text-gray-500" />
          <h2 className="text-3xl font-bold">Your Cart is Empty</h2>
          <p className="text-gray-500">
            Select some items to add to your cart.
          </p>
        </div>
      ) : (
        <div className="mx-auto flex w-[93vw] flex-col items-center">
          {/* Cart Items */}
          {items.map((item) => {
            total += item.price;

            return (
              <CartCard
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.image}
                price={item.price}
                category={item.category}
              />
            );
          })}

          {/* Footer */}
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
            {/* Total Price */}
            <div className="group relative flex h-[60px] w-[85vw] items-center justify-center sm:w-[320px]">
              <span
                className="absolute inset-0 rounded-xl border border-gray-300 bg-gray-200 shadow transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                aria-hidden="true"
              />
              <span className="relative z-10 text-center font-bold">
                Total Price : ₹ {total}/-
              </span>
            </div>

            {/* Delete */}
            <div className="flex h-[60px] w-[85vw] items-center justify-between  px-5   sm:w-[320px] relative">
              <span className="absolute z-10 inset-0 shadow rounded-xl border border-gray-300 bg-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg" aria-hidden="true"/>
               <span className="relative z-10 text-center font-bold">
                Delete All items
              </span>

              <button
                onClick={() => dispatch(RemoveAllItem())}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:bg-red-700 hover:scale-110 relative z-10"
              >
                <MdDelete className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
