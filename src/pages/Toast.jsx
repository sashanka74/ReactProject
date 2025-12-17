import React from "react";

export default function Toast({ open, onClose }) {
  return (
    <div
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-80 bg-white shadow-xl border rounded-t-xl p-4 transition-all duration-500 
      ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-3 top-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-lg font-semibold mb-2">Pop Form</h2>

      <form className="space-y-3">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-1 rounded mt-1"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <input
            type="text"
            maxLength="100"
            className="w-full border px-3 py-1 rounded mt-1"
            placeholder="Description"
          />
        </div>
      </form>
    </div>
  );
}