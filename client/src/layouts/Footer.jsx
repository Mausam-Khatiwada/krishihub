const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">
        
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-lg font-bold text-green-700 mb-2">🌾 KrishiHub</h2>
          <p>Connecting farmers directly with buyers. Support local agriculture.</p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-green-700">Home</a></li>
            <li><a href="/products" className="hover:text-green-700">Products</a></li>
            <li><a href="/about" className="hover:text-green-700">About Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@krishihub.com</p>
          <p>Phone: +977-9800000000</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        &copy; {new Date().getFullYear()} KrishiHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
