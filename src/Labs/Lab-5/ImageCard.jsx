export default function ImageCard() {
  return (
    <div className="max-w-sm mx-auto mt-16 rounded-lg overflow-hidden shadow-lg relative">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
        alt="Card Background"
        className="w-full h-64 object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-64 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Adventure Awaits
        </h2>
        <p className="text-white text-center">
          Explore the world and experience new adventures every day.
        </p>
      </div>
    </div>
  );
}
