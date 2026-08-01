import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiBeachBag } from "react-icons/gi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  const item = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[8] flex flex-col items-center justify-center gap-2 overflow-auto border-2 border-black bg-white py-2 shadow-[5px_2px_10px_rgb(127,238,246)]">

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-10 h-screen w-[250px] border-2 border-[greenyellow] bg-white transition-transform duration-300 sm:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex w-[96%] flex-col items-end gap-5 p-[10px]">
          <li
            className="cursor-pointer text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            <RxCross2 />
          </li>

          <li>
            <Link to="/" className="text-black no-underline">
              Home
            </Link>
          </li>

          <li>
            <Link to="/cart" className="text-black no-underline">
              My Cart ({item.length})
            </Link>
          </li>

          <li>My Account</li>
          <li>Chat</li>

          <li>
            <Link to="/sell" className="text-black no-underline">
              My Sell
            </Link>
          </li>
        </ul>
      </div>

      {/* Upper Nav */}
      <div className="flex w-[95%] items-center justify-between border-2 border-black font-['Times_New_Roman'] text-[30px] font-bold">

        <div className="flex gap-[30px]">
          <span className="text-[29px] font-bold text-aqua">
            <GiBeachBag />
          </span>

          <span>Find_All</span>
        </div>

        {/* Hidden on mobile */}
        <span className="hidden sm:block">
          <Link to="/" className="text-black no-underline">
            Home
          </Link>
        </span>

        <span className="hidden sm:block">
          <Link to="/cart" className="text-black no-underline">
            My Cart ({item.length})
          </Link>
        </span>

        {/* Desktop Hamburger */}
        <span
          className="hidden cursor-pointer text-3xl sm:block"
          onClick={() => setOpen(!open)}
        >
          <RxHamburgerMenu />
        </span>

        {/* Mobile Hamburger */}
        <span
          className="cursor-pointer text-3xl sm:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <RxHamburgerMenu />
        </span>
      </div>

      {/* Search */}
      <div className="w-[90%] sm:w-1/2">
        <form className="flex items-center justify-center rounded-xl border-2 border-black bg-[rgb(226,235,235)] p-1">

          <input
            type="search"
            placeholder="Search here..."
            required
            className="h-[30px] w-[80%] border-none bg-transparent outline-none"
          />

          <button
            type="submit"
            className="w-[60px] border-none bg-transparent"
          >
            <CiSearch className="text-xl" />
          </button>

        </form>
      </div>

      {/* Desktop Dropdown */}
      <div
        className={`hidden w-[87%] border-2 border-black  sm:block ${
          open ? "h-[6vh]" : "h-0 overflow-hidden border-none pt-0"
        }`}
      >
        <ul className="flex items-center justify-evenly">
          <li className="list-none">My Account</li>

          <li className="list-none">Chat</li>

          <li className="list-none">
            <Link to="/sell">My Sell</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;