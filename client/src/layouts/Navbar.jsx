import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">🌾 KrishiHub</Link>
        <div className="space-x-6 hidden sm:block">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/products" className="hover:text-green-200 transition">Products</Link>
          <Link to="/about" className="hover:text-green-200 transition">About</Link>
        </div>
        <div>
          <Link
            to="/login"
            className="bg-white text-green-700 px-4 py-2 rounded hover:bg-green-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
