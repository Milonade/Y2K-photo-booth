function PhotoGallery() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-emerald-500/5">
      <h2 className="text-2xl font-semibold text-emerald-200">Photo Gallery</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="h-44 rounded-3xl border border-slate-700 bg-slate-950/60" />
        <div className="h-44 rounded-3xl border border-slate-700 bg-slate-950/60" />
      </div>
    </section>
  );
}

export default PhotoGallery;
