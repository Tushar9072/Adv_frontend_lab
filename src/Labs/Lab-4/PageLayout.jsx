export default function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Sidebar */}
      <aside className="bg-gray-200 w-full md:w-1/4 p-6">
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </aside>

      {/* Right Content */}
      <main className="bg-white flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p className="text-gray-700 leading-relaxed">
          This is the main content section. You can place articles, images, 
          or any other content here. The layout is responsive: on smaller screens, 
          the sidebar stacks on top of the content.
        </p>
      </main>

    </div>
  );
}
