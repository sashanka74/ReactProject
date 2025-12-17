import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">

      {/* 🌈 Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-lightpurple-600 py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 tracking-wide">
          Discover Premium Products
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Shop the latest collections with unbeatable quality and smart learning blogs.
        </p>

        <button className="mt-8 bg-white text-indigo-700 font-semibold px-10 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Exploring More
        </button>
        </section>

      {/* 💎 Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          What Makes Us Special?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-2xl shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">✨ Premium Quality</h3>
            <p className="text-gray-300">
              Hand-selected products with the highest standards.
            </p>
          </div>

          <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-2xl shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">⚡ Super Fast Delivery</h3>
            <p className="text-gray-300">
              Fast, secured, and tracked delivery for every order.
            </p>
          </div>

          <div className="bg-gray-800 hover:bg-gray-700 p-8 rounded-2xl shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">📘 Knowledge Hub</h3>
            <p className="text-gray-300">
              Learn from clean, insightful tutorials and blogs.
            </p>
          </div>

        </div>
      </section>

      

      {/* 🚀 CTA Section */}
      <section className="bg-gradient-to-r from-lightpurple-700 to-indigo-700 py-16 text-center">
        <h2 className="text-4xl font-bold">Ready to Shop?</h2>

        <p className="mt-3 text-gray-200 text-lg">
          Explore exclusive collections crafted just for you.
        </p>

        <button className="mt-8 bg-white text-purple-700 px-10 py-3 font-bold rounded-full shadow hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

    </div>
  );
}
