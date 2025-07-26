const ProductCard = ({ title, price, category, image }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-green-600 font-bold text-lg">Rs. {price}</p>
        <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
