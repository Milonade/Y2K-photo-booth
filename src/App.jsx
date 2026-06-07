import { useState } from 'react';
import CameraPreview from './components/CameraPreview.jsx';
import BackgroundSelector from './components/BackgroundSelector.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import ExportButton from './components/ExportButton.jsx';

const defaultBackgrounds = [
  { id: 'sun', name: 'Sunny Meadow', type: 'image', value: '/Imgs/1295463_94879.jpg' },
  { id: 'heart', name: 'Neon Heart', type: 'image', value: '/Imgs/2eb8f6af95196bf1f2a332a13b8915fb.png' },
  { id: 'apples', name: 'Chrome Apples', type: 'image', value: '/Imgs/77358e183b0361512719a64267f730d6.jpg' },
  { id: 'flowers', name: 'Dream Floral', type: 'image', value: '/Imgs/cf661946959dd48ae7dc5998fa718dd7.jpg' },
];

const imageModules = import.meta.glob('./assets/Imgs/*.{png,jpg,jpeg}', { eager: true, as: 'url' });

const formatLabel = (id) =>
  id
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

const backgroundOptions = Object.entries(imageModules).map(([path, url]) => {
  const fileName = path.split('/').pop();
  const id = fileName ? fileName.replace(/\.[^/.]+$/, '') : fileName;
  return {
    id,
    name: formatLabel(id),
    type: 'image',
    value: url,
  };
});

const backgrounds = backgroundOptions.length > 0 ? backgroundOptions : defaultBackgrounds;

function App() {
  const [selectedBackgroundId, setSelectedBackgroundId] = useState(backgrounds[0].id);
  const selectedBackground = backgrounds.find((bg) => bg.id === selectedBackgroundId) || backgrounds[0];

  return (
    <div className="min-h-screen bg-transparent text-slate-600">
      <main className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-4xl font-semibold text-purple-700">Y2K Photo Booth</h1>

        <section className="space-y-8">
          <CameraPreview selectedBackground={selectedBackground} />
          
          <BackgroundSelector
            backgrounds={backgrounds}
            selectedId={selectedBackgroundId}
            onSelect={setSelectedBackgroundId}
          />
          
          <PhotoGallery />
          
          <ExportButton />
        </section>
      </main>
    </div>
  );
}

export default App;
