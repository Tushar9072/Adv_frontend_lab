export default function ScrollableList() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
  ];

  return (
    <div className="max-w-md mx-auto mt-16 p-4">
      <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
