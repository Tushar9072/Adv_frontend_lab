export default function NavLinks() {
  return (
    <nav className="bg-gray-100 py-4">
      <ul className="flex justify-center space-x-8 text-lg font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Services</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
