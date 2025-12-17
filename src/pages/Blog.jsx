import React from "react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Tech Gadgets in 2025",
      desc: "Explore the most trending gadgets that are redefining user experience.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      date: "Apr 11, 2025",
    },
    {
      id: 2,
      title: "Why UI/UX Matters in Modern Apps",
      desc: "Good design meets functionality — learn why UI/UX is important.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "Jan 11, 2025",
    },
    {
      id: 3,
      title: "AI is Transforming Daily Life",
      desc: "Artificial Intelligence is closer than ever. Here’s how it impacts you.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "June 30, 2025",
    },
  ];

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        Latest Blog Articles
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 rounded-xl shadow hover:shadow-xl transition p-5"
          >
            <img
              src={post.img}
              alt={post.title}
              className="rounded-lg h-40 w-full object-cover"
            />

            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.desc}</p>

            <p className="text-sm text-gray-400 mt-3">{post.date}</p>

            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Read More
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}