function ExportButton() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-pink-500/5">
      <h2 className="text-2xl font-semibold text-pink-200">Capture & Export</h2>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <button className="w-full rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-auto">Capture</button>
        <button className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-400 sm:w-auto">Download</button>
      </div>
    </section>
  );
}

export default ExportButton;
