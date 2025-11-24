export default function SquareBoxes() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
      <div className="w-20 h-20 bg-blue-500 rounded-md flex items-center justify-center text-white">
        Small
      </div>

      <div className="w-32 h-32 bg-green-500 rounded-md flex items-center justify-center text-white">
        Medium
      </div>

      <div className="w-48 h-48 bg-red-500 rounded-md flex items-center justify-center text-white">
        Large
      </div>
    </div>
  );
}
