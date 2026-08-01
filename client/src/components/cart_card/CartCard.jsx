import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { RemoveItem } from "../../redux/cartSlice";

const CartCard = ({ img, name, price, category, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="m-[10px] flex w-[97%] flex-col items-center gap-4 border-2 border-[rgb(228,224,224)] p-[10px]  md:h-[30vh] md:flex-row md:justify-evenly md:gap-[13px] md:px-10 transition-shadow duration-300 hover:shadow-[10px_10px_35px_rgba(0,0,0,0.35)]">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="h-auto w-[80%] rounded-xl border-2 border-[rgb(228,224,224)] bg-white object-contain shadow-[9px_10px_7px_rgba(0,0,0,0.2)] md:h-[23vh] md:w-[220px]"
      />

      <div className="flex flex-1 flex-col items-center justify-center gap-[10px]">
        <span className="w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-bold md:w-full md:text-[20px]">
          {name}
        </span>

        <span className="w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-bold md:w-full md:text-[20px]">
          {category}
        </span>

        <span className="text-sm font-bold md:text-[20px]">
          ₹{price}
        </span>
      </div>

      <button
        type="button"
        onClick={() => dispatch(RemoveItem(id))}
        className="flex h-[35px] w-[80px] items-center justify-center rounded-xl bg-[rgba(251,4,4,0.883)]  md:h-[40px] md:w-[100px]  md:hover:bg-[rgb(223,23,23)] "
      >
        <MdDelete className="text-[20px] text-white transition-all duration-300" />
      </button>
    </div>
  );
};

export default CartCard;