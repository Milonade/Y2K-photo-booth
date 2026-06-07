function PhotoGallery() {
  return (
    <section className="rounded-bubble bg-white/30 backdrop-blur-md border border-white/50 p-6 shadow-soft">
      <h2 className="text-center text-xl font-semibold text-purple-700">Gallery</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="h-32 rounded-bubble border-2 border-white/50 bg-white/20 shadow-soft" />
        <div className="h-32 rounded-bubble border-2 border-white/50 bg-white/20 shadow-soft" />
        <div className="h-32 rounded-bubble border-2 border-white/50 bg-white/20 shadow-soft" />
        <div className="h-32 rounded-bubble border-2 border-white/50 bg-white/20 shadow-soft" />
      </div>
    </section>
  );
}

export default PhotoGallery;
