export default function SideBySideParagraphs() {
  return (
    <div className="max-w-5xl mx-auto mt-16 p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <p className="text-gray-700 leading-relaxed md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa.
        </p>

        <p className="text-gray-700 leading-relaxed md:w-1/2">
          Vestibulum lacinia arcu eget nulla. Class aptent taciti 
          sociosqu ad litora torquent per conubia nostra, per inceptos 
          himenaeos. Curabitur sodales ligula in libero. Sed dignissim 
          lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean 
          quam. In scelerisque sem at dolor.
        </p>
      </div>
    </div>
  );
}
