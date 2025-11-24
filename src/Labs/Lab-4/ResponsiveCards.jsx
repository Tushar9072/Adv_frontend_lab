export default function ResponsiveCards() {
  return (
    <div className="max-w-6xl mx-auto mt-16 p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-blue-500 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105">
        Card 1
      </div>

      <div className="bg-green-500 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105">
        Card 2
      </div>

      <div className="bg-red-500 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105">
        Card 3
      </div>

      <div className="bg-yellow-500 text-white p-6 rounded-lg text-center transition-all duration-300 hover:scale-105">
        Card 4
      </div>
    </div>
  );
}
