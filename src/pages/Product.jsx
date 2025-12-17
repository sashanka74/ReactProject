import { useEffect, useState } from "react";
import axios from "axios";

export const Product =() => {
  const PER_PAGE = 12;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  /* ✅ Fetch Products */
  const fetchProducts = async (category = "", page = 1) => {
    try {
      const skip = (page - 1) * PER_PAGE;

      const url = category
        ? `https://dummyjson.com/products/category/${category}?limit=${PER_PAGE}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${PER_PAGE}&skip=${skip}`;

      const res = await axios.get(url);

      setProducts(res.data.products);
      setTotalProducts(res.data.total);
    } catch (err) {
      console.error("Product Fetch Error:", err);
    }
  };

  /* ✅ Fetch Categories */
  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");

      // API returns array of objects: { slug, name, url }
      setCategories(res.data);
    } catch (err) {
      console.error("Category Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory, currentPage);
  }, [selectedCategory, currentPage]);

  useEffect(() => {
    fetchCategories();
  }, []);

  /* ✅ Search Filter */
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  /* ✅ Pagination Logic */
  const totalPages = Math.ceil(totalProducts / PER_PAGE);

  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {/* 🔍 Search + Category */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-8 max-w-7xl mx-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg w-full md:w-72"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 border rounded-lg w-full md:w-60"
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between mt-3">
                <span className="font-bold text-indigo-600">₹ {item.price}</span>
                <span className="text-yellow-500">⭐ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          {/* Prev Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {/* Start dots */}
          {currentPage > 3 && <span className="px-2">...</span>}

          {/* Page Numbers */}
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          {/* End dots */}
          {currentPage < totalPages - 2 && <span className="px-2">...</span>}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}



