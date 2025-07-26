import ProductCard from "../components/ProductCard";

const mockProducts = [
  {
    id: 1,
    title: "Fresh Tomatoes",
    price: 120,
    category: "Vegetables",
    image: "https://source.unsplash.com/400x300/?tomato",
  },
  {
    id: 2,
    title: "Organic Potatoes",
    price: 100,
    category: "Root Crops",
    image: "https://source.unsplash.com/400x300/?potato",
  },
  {
    id: 3,
    title: "Basmati Rice",
    price: 200,
    category: "Grains",
    image: "https://source.unsplash.com/400x300/?rice",
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-green-800 text-center">Buy Fresh From Farmers</h1>

      <h1 className="text-3xl font-bold mb-6 text-green-700">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
