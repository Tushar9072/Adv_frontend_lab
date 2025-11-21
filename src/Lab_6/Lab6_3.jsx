const Lab6_3 = () => {
  const EARTHY_BROWN = "bg-[#EAE4D2]";
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <header className="py-4 px-6 bg-white border-b border-gray-200">
        <h1 className="text-3xl font-bold">Free CSS Layouts</h1>
      </header>
      <div className="grid grid-cols-3">
        <main className="col-span-2 p-6 pr-12">
          <h2 className="text-xl font-semibold mb-4">Content here.</h2>

          <p className="mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            asperiores at consequuntur voluptate, quibusdam incidunt quaerat
            eligendi, provident, vel nesciunt beatae consequatur inventore
            necessitatibus molestiae non. Sapiente dolorum corporis esse? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore
            atque distinctio, facilis ex laborum explicabo odit dignissimos nisi
            culpa numquam voluptas repellat eaque tenetur magni, commodi maiores
            eos nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Id, vero sed laudantium ut, quasi rerum, quos eos dolorem enim
            libero quibusdam aliquid. Mollitia, voluptatum magnam harum animi
            sequi perspiciatis vitae!
          </p>

          <p className="mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            asperiores at consequuntur voluptate, quibusdam incidunt quaerat
            eligendi, provident, vel nesciunt beatae consequatur inventore
            necessitatibus molestiae non. Sapiente dolorum corporis esse? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aliquid labore
            atque distinctio, facilis ex laborum explicabo odit dignissimos nisi
            culpa numquam voluptas repellat eaque tenetur magni, commodi maiores
            eos nam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Id, vero sed laudantium ut, quasi rerum, quos eos dolorem enim
            libero quibusdam aliquid. Mollitia, voluptatum magnam harum animi
            sequi perspiciatis vitae!
          </p>

        </main>

        <nav className={`col-span-1 p-4 ${EARTHY_BROWN}`}>
          <h2 className="text-xl font-semibold mb-3">Navigation Here</h2>
          <ul className="space-y-1 text-sm">
            <li>Free CSS Templates [cite: 113]</li>
            <li>Free CSS Layouts [cite: 113]</li>
          </ul>
        </nav>
      </div>{" "}
      <section className={`w-full py-4 px-6 mt-4 ${EARTHY_BROWN}`}>
        <h2 className="text-xl font-semibold mb-2">
          More stuff here. [cite: 108]
        </h2>
        <p className="text-sm leading-snug">
          sit malesuada lacus pellus parturpiscing. Pellenterdumat maecenatoque
          cras a magna nibh et quis diam ames et[cite: 109]. Laoremvolutpat ac
          dolor eget eget temper lacus vestibus velit lacus venean Magnaipsum
          tellus morbi leo aliquat nulla convallis pellentesque[cite: 110].
        </p>
      </section>
      <footer
        className={`py-3 px-6 text-gray-700 text-left ${EARTHY_BROWN} border-t border-gray-400 mt-4`}
      >
        Footer [cite: 111]
      </footer>
    </div>
  );
};

export default Lab6_3;
