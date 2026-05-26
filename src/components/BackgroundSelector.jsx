function BackgroundSelector() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl shadow-fuchsia-500/5">
      <h2 className="text-2xl font-semibold text-fuchsia-200">Background Selector</h2>
      <div className="mt-4 space-y-3">
        <div className="h-24 rounded-2xl border border-slate-700 bg-slate-950/60" />
        <div className="h-24 rounded-2xl border border-slate-700 bg-slate-950/60" />
      </div>
    </section>
  );
}

export default BackgroundSelector;
