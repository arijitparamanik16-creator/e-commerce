import React, { useState } from "react";
import bg_gif from "../../assets/bg0.gif";
import { category } from "../../category";
import { all_items } from "../../all_items";
import Product from "../../components/product_card/Product";

const Home = () => {
  const [items, setItems] = useState(all_items);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleItem = (categoryName) => {
    setActiveCategory(categoryName);
    if (categoryName === "All") {
      setItems(all_items);
      return;
    }

    setItems(all_items.filter((item) => item.category === categoryName));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Banner */}
      <div className="w-[93vw] overflow-hidden rounded-[15px] border-2 border-black shadow-[4px_5px_9px_3px_rgb(48,57,58)]">
        <img
          src={bg_gif}
          alt="Banner"
          className="w-full h-[30vh] object-cover sm:h-[35vh] md:h-[42vh] lg:h-[50vh]"
        />
      </div>

      {/* Categories */}
      <div className="mt-8 flex w-[90vw]  justify-evenly items-center gap-5 overflow-x-auto rounded-md border-2 border-black px-3 py-4 scrollbar-hide">
        {category.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItem(item.name)}
            className={`flex h-[160px] w-[157px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-[11px] border-2 border-gray-200 text-base font-bold hover:shadow-[6px_6px_20px_rgb(67,66,66)] transition-all duration-300   ${
              activeCategory === item.name
                ? "scale-110 border-blue-500 bg-blue-50 shadow-[4px_4px_15px_rgb(59,130,246)]"
                : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-[100px] w-[110px] object-contain"
            />

            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="mt-8 grid w-[85vw] gap-6 border-2 border-black p-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6">
        {items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
