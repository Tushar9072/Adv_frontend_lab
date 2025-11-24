export default function ImageGallery() {
  return (
    <div className="max-w-5xl mx-auto mt-16 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Nature"
          className="w-full rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=400&q=80"
          alt="City"
          className="w-full rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80"
          alt="Mountains"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
