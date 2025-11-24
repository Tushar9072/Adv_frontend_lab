export default function PricingCard() {
  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white shadow-xl rounded-2xl text-center">
      
      <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>

      <p className="text-4xl font-bold mb-4">
        $19<span className="text-lg font-medium text-gray-500">/mo</span>
      </p>

      <p className="text-gray-700 mb-6">
        Includes essential features for individuals getting started.
      </p>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
        Choose Plan
      </button>

    </div>
  );
}
