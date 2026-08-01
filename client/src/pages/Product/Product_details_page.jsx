import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice";

const Product_details_page = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product_details = useSelector((state) => state.product);

  const product = product_details.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <h2 className="mt-10 text-center text-2xl font-bold">
        Product not found
      </h2>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      AddItem({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        category: product.category,
      }),
    );
  };

  return (
    <section className="min-h-[70vh] bg-gray-100 px-4 py-8 sm:px-5 sm:py-10 md:px-5 md:py-12">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:p-8">
        {/* Image */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-[380px] object-contain sm:max-w-[420px] md:max-h-[420px]"
          />
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          <p className="text-base text-gray-500">{product.category}</p>

          <p className="text-2xl font-bold text-gray-900 md:text-3xl">
            ₹ {product.price}
          </p>

          <p className="leading-7 text-gray-600">
            Premium quality product with modern design. Comfortable, durable and
            perfect for daily use.
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <button
              onClick={handleAddToCart}
              className="group relative flex-1  rounded-xl px-6 py-3 font-semibold text-white"
            >
              <span
                className="absolute inset-0 rounded-xl bg-yellow-400 transition-transform duration-300 group-hover:scale-105 group-hover:bg-yellow-500"
                aria-hidden="true"
                // aria-hidden="true" tells screen readers to skip that span entirely.
              />
              "<span className="relative z-10">Add to cart</span>
            </button>

            <button className="group relative flex-1  rounded-xl px-6 py-3 font-semibold text-white">
              {/* Background layer - this is what scales */}
              <span
                className="absolute inset-0 rounded-xl bg-orange-500 transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-600"
                aria-hidden="true"
              />
              {/* Text layer - stays fixed, never scales */}
              <span className="relative z-10">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product_details_page;
