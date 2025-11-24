export default function Card() {
  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-semibold mb-3">Welcome to My Card</h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        This is a simple card example created using Tailwind CSS. 
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  );
}
