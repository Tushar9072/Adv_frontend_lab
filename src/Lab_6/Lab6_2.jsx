import React from "react";

const Lab6_2 = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      <header className="py-4 px-6 bg-white border-b border-gray-200">
        <h1 className="text-3xl font-bold">Free CSS Layouts</h1>
      </header>
      <div className="grid grid-cols-4 min-h-[calc(100vh-10rem)]">
        <nav className="col-span-1 p-6 border-r border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Navigation Here</h2>
          <ul className="space-y-1 text-sm">
            <li>Free CSS Templates</li>
            <li>Free CSS Layouts</li>
          </ul>
        </nav>
        <main className="col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Content here.</h2>

          <p className="mb-4 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            quas iusto enim aliquam totam consectetur laboriosam accusantium
            aspernatur laudantium quibusdam dolorem tenetur modi asperiores
            ipsam magnam, quasi ratione commodi non!
          </p>

          <p className="mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            suscipit animi facilis id aspernatur tenetur nam minus, dicta enim
            atque error veniam itaque et ab voluptatem hic qui quae dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eos consequuntur iusto at delectus alias reprehenderit unde,
            consectetur quibusdam commodi, ipsum recusandae veritatis optio
            eligendi dignissimos quod. Perferendis, illum maxime?
          </p>

          <p className="leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nam
            maxime quidem accusamus dolorum cumque aspernatur veritatis optio
            tempore et molestiae libero voluptates placeat totam voluptatibus,
            dignissimos in consequuntur ipsam!Lorem Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sunt pariatur dolore rerum nisi in ea,
            exercitationem necessitatibus quasi tempore quibusdam nemo similique
            voluptatibus sequi iste assumenda blanditiis, nulla velit eos!
          </p>
        </main>

        <aside className="col-span-1 p-4 bg-amber-100/50 border-l border-gray-200">
          <h2 className="text-lg font-semibold mb-4">More stuff here.</h2>
          <p className="text-sm leading-snug">
            sit malesuada lacus pellus parturpiscing. Pellenterdumat
            maecenatoque cras a magna nibh et quis diam ames et. Laoremvolutpat
            ac dolor eget eget temper lacus vestibus velit lacus venean
            Magnaipsum tellus morbi leo aliquat nulla convallis pellentesque.
          </p>
        </aside>
      </div>{" "}
      <footer className="py-3 px-6 bg-gray-300 text-gray-700 text-center ">
        Footer
      </footer>
    </div>
  );
};

export default Lab6_2;
