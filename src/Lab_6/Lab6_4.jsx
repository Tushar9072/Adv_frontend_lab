import React from "react";

const Lab6_4 = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-black text-white py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl leading-none">site title</h1>
          <p className="text-sm mt-1">fixed 1-column #2 layout (basic)</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto flex gap-10 py-10 px-6">
        <aside className="w-40 text-sm leading-snug">
          <div className="mb-4">
            <p>leftColumn</p>
            <a href="#" className="text-red-600 underline block">
              Link Item
            </a>
            <a href="#" className="text-red-600 underline block">
              Link Item
            </a>
            <a href="#" className="text-red-600 underline block">
              Link Item
            </a>
          </div>

          <p className="mt-4">
            Augur et fulgente decorus arcu Phoebus acceptusque novem Camenis,
            qui salutari levat arte fessos corporis artus.
          </p>
        </aside>

        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-4">centerColumn</h2>

          <p className="text-sm mb-6">
            Augur et fulgente decorus arcu Phoebus acceptusque novem Camenis,
            qui salutari levat arte fessos corporis artus, si Palatinas videt
            aequos aras remque Romanam Latiumque felix alterum in lustrum
            meliusque semper prorogat aevom, quaeque Aventinum tenet Algidumque,
            quindecim Diana preces virorum curat et votis puerorum amicas
            applicat auris.
          </p>

          <h3 className="text-xl font-semibold mb-2">Header 2</h3>

          <a href="#" className="text-red-600 underline text-sm">
            Link Item
          </a>

          <ul className="list-disc list-inside text-sm mt-3 space-y-1">
            <li>List Item</li>
            <li>List Item</li>
            <li>
              List Item
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </li>
          </ul>

          <div className="mt-8 bg-gray-100 border border-gray-300 p-4 text-sm">
            <p className="font-semibold mb-1">blockquote</p>
            <p>
              Augur et fulgente decorus arcu Phoebus acceptusque novem Camenis,
              qui salutari levat arte fessos corporis artus.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-xs text-red-600 underline space-x-2">
        <a href="#">XHTML</a>
        <span>|</span>
        <a href="#">CSS</a>
        <span>|</span>
        <a href="#">WCAG</a>
        <span>|</span>
        <a href="#">The CSS Tinderbox</a>
      </footer>
    </div>
  );
};

export default Lab6_4;
