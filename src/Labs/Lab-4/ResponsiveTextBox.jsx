export default function ResponsiveTextBox() {
  return (
    <div className="flex justify-center mt-16 p-4">
      <input
        type="text"
        placeholder="Enter your text..."
        className="min-w-[200px] max-w-[500px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
