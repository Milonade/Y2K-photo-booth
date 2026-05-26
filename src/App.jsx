import CameraPreview from './components/CameraPreview.jsx';
import BackgroundSelector from './components/BackgroundSelector.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import ControlsPanel from './components/ControlsPanel.jsx';
import ExportButton from './components/ExportButton.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
          <h1 className="text-4xl font-semibold tracking-tight text-cyan-300">Y2K Photo Booth</h1>
          <p className="mt-3 max-w-2xl text-slate-300">Live chroma key compositing with retro-inspired virtual backgrounds and photo export.</p>
        </header>

        <section className="grid gap-8 xl:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <CameraPreview />
            <PhotoGallery />
          </div>

          <aside className="space-y-8">
            <BackgroundSelector />
            <ControlsPanel />
            <ExportButton />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
