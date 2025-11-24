export default function ResponsiveVideo() {
  return (
    <div className="max-w-3xl mx-auto mt-16 px-4">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://player.vimeo.com/video/22439234" // public embed video
          title="Responsive Video"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
