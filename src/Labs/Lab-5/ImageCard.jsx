import img from "../../assets/images.jpeg"

export default function ImageCard() {
  return (
    <div className="max-w-sm mx-auto mt-16 rounded-lg overflow-hidden shadow-lg relative">
      <div 
      style={{backgroundImage:"url('')"}}
        alt="Card Background"
        className="w-full h-64 object-cover "
      >
      </div>

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
