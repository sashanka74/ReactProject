export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        <div>
          <h2 className="text-xl font-bold text-white mb-3">MyStore</h2>
          <p>Your trusted Best in all products.</p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:text-indigo-400">Products</a></li>
            <li><a href="/blog" className="hover:text-indigo-400">Blog</a></li>
            <li><a href="/about" className="hover:text-indigo-400">About</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="hover:text-indigo-400" href="#">Facebook</a>
            <a className="hover:text-indigo-400" href="#">Instagram</a>
            <a className="hover:text-indigo-400" href="#">Twitter</a>
          </div>
        </div>

      </div>

      <p className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyStore — All Rights Reserved.
      </p>
    </footer>
  );
}