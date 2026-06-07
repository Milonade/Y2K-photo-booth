import React from 'react';

function BackgroundSelector({ backgrounds, selectedId, onSelect }) {
  const scrollRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="rounded-bubble bg-white/30 backdrop-blur-md border border-white/50 p-6 shadow-soft">
      <h2 className="text-center text-xl font-semibold text-purple-700">Backgrounds</h2>
      <div className="mt-4 flex items-center gap-4">
        <button onClick={() => scroll('prev')} className="flex-shrink-0 rounded-full bg-white/50 backdrop-blur-sm p-3 text-purple-700 hover:bg-white/70 text-2xl shadow-soft">‹</button>
        
        <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth">
          {backgrounds.map((bg) => {
            const previewStyle =
              bg.type === 'image'
                ? {
                    backgroundImage: `url(${bg.value})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
                : { backgroundColor: '#0f172a' };

            return (
              <button
                key={bg.id}
                type="button"
                onClick={() => onSelect(bg.id)}
                className={`flex-shrink-0 w-32 h-24 rounded-bubble border-2 transition shadow-soft ${
                  selectedId === bg.id ? 'ring-2 ring-purple-400 border-purple-300' : 'border-white/50'
                }`}
                style={previewStyle}
              />
            );
          })}
        </div>
        
        <button onClick={() => scroll('next')} className="flex-shrink-0 rounded-full bg-white/50 backdrop-blur-sm p-3 text-purple-700 hover:bg-white/70 text-2xl shadow-soft">›</button>
      </div>
    </section>
  );
}

export default BackgroundSelector;
