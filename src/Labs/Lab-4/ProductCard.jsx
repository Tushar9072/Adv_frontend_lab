export default function ProductCard() {
  return (
    <div className="w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-16">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Smartphone X</h2>
        <p className="text-gray-700 mb-4">
          A powerful smartphone with advanced features and sleek design.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
