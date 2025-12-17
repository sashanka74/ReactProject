import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Toast from "./Toast";


export default function Header() {
  const [openToast, setOpenToast] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
      : "text-gray-700 hover:text-indigo-600 transition";

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
            My Website
          </h1>

          {/* Navigation */}
          <ul className="flex gap-8 text-lg font-medium">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/product" className={linkClass}>Products</NavLink></li>
            <li><NavLink to="/blog" className={linkClass}>Blog</NavLink></li>
            <li><NavLink to="/Login" className={linkClass}>Login</NavLink></li>
            <li><NavLink to="/Signup" className={linkClass}>Signup</NavLink></li>
            <li><NavLink to="/cart" className={linkClass}>Cart</NavLink> </li>
          </ul>

          {/* Popup Button */}
          {/* <button
            onClick={() => setOpenToast(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
          >
            Openup
          </button> */}

        </div>
      </header>
      <Toast open={openToast} onClose={() => setOpenToast(false)} />
    </>
  );
}