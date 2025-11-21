import React from 'react'

const Lab6_5 = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-gray-200 border-b">
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-2 text-sm">
          <div className="flex space-x-4">
            <a href="#" className="text-red-600 underline">Home</a>
            <a href="#" className="text-red-600 underline">About</a>
            <a href="#" className="text-red-600 underline">Gallery</a>
            <a href="#" className="text-red-600 underline">Contact</a>
          </div>

          <div className="flex space-x-2">
            <a href="#" className="text-red-600 underline">LINKS</a>
            <span>|</span>
            <a href="#" className="text-red-600 underline">SITE MAP</a>
            <span>|</span>
            <a href="#" className="text-red-600 underline">CONTACT</a>
          </div>
        </div>
      </div>

      <header className="bg-gray-300 py-10 px-6 border-b">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light">site title</h1>
          <p className="text-sm mt-1">fixed 3-column over 4-column layout</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-1">centerColumn</h2>
        <p className="text-sm text-gray-600 mb-4">sub heading</p>

        <p className="text-sm max-w-3xl mb-8">
          Augur et fulgente decorus arcu Phoebus acceptusque novem Camenis, qui
          salutari levat arte fessos corporis artus, si Palatinas videt aequos
          aras remque Romanam Latiumque felix alterum in lustrum meliusque semper
          prorogat aevom, quaeque Aventinum tenet Algidumque, quindecim Diana
          preces virorum curat et votis puerorum amicas applicat auris.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border p-4 bg-gray-100">
              <h3 className="font-semibold mb-2">cell_{i}</h3>
              <p className="text-sm mb-4">
                Quindecim Diana preces virorum curat et votis puerorum amicas
                applicat auris.
              </p>

              <a href="#" className="text-red-600 underline text-sm block">
                Link<br />Date<br />
                Puerorum amicas applicat auris.
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t pt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border p-4 bg-gray-100">
              <h3 className="font-semibold mb-2">box_{i}</h3>
              <p className="text-sm mb-4">
                Quindecim Diana preces virorum curat et votis puerorum amicas
                aplicat auris.
              </p>

              <a href="#" className="text-red-600 underline text-sm">Link...</a>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center text-xs py-6 text-gray-500 space-x-2">
        <span>Copyright © 2005-2006 Company Name</span>
        <span>|</span>
        <a href="#" className="text-red-600 underline">The CSS Tinderbox</a>
      </footer>
    </div>
  );
}

export default Lab6_5