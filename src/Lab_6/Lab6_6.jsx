import React from 'react'

const Lab6_6 = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto space-y-3">
        <header className="bg-cyan-300 text-center py-4 border">
          Header
        </header>

        <div className="flex gap-3">
          <aside className="w-1/3 bg-lime-400 text-center py-16 border">
            Sidebar
          </aside>

          <div className="flex-1 space-y-3">
            <section className="bg-yellow-300 text-center py-16 border">
              Main Content
            </section>

            <section className="bg-gray-500 text-center py-6 text-white border">
              Extra Content
            </section>
          </div>
        </div>

        <footer className="bg-orange-400 text-center py-4 border">
          Footer
        </footer>
      </div>
    </div>
  );
}

export default Lab6_6