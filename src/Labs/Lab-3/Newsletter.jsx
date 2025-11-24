export default function Newsletter() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-4">
        Get the latest updates, articles, and resources delivered straight to your inbox.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Subscribe
      </button>
    </div>
  );
}
