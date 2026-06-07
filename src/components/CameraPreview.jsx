import React, { useEffect, useRef, useState } from 'react';
import { applyChromaKey } from '../lib/chromaKey.js';

function CameraPreview({ selectedBackground }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const offscreenRef = useRef(null);
  const bgCanvasRef = useRef(null);
  const maskCanvasRef = useRef(null);
  const bgImageRef = useRef(null);
  const bgLoadedRef = useRef(false);
  const rafRef = useRef(null);
  const selectedBackgroundRef = useRef(selectedBackground);
  const chromaEnabledRef = useRef(true);
  const thresholdRef = useRef(60);
  const softnessRef = useRef(40);

  const [streaming, setStreaming] = useState(false);
  const [chromaEnabled, setChromaEnabled] = useState(true);
  const [threshold, setThreshold] = useState(60);
  const [softness, setSoftness] = useState(40);

  useEffect(() => {
    selectedBackgroundRef.current = selectedBackground;

    bgLoadedRef.current = false;
    if (selectedBackground?.type === 'image') {
      const img = new Image();
      img.src = selectedBackground.value;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        bgImageRef.current = img;
        bgLoadedRef.current = true;
      };
      img.onerror = () => {
        bgImageRef.current = null;
        bgLoadedRef.current = false;
      };
    } else {
      bgImageRef.current = null;
      bgLoadedRef.current = true;
    }
  }, [selectedBackground]);

  useEffect(() => {
    chromaEnabledRef.current = chromaEnabled;
  }, [chromaEnabled]);

  useEffect(() => {
    thresholdRef.current = threshold;
  }, [threshold]);

  useEffect(() => {
    softnessRef.current = softness;
  }, [softness]);

  useEffect(() => {
    return () => stopCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCamera = async () => {
    if (streaming) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      const video = videoRef.current;
      video.srcObject = stream;
      await video.play();
      setStreaming(true);

      const off = document.createElement('canvas');
      offscreenRef.current = off;
      const bgCanvas = document.createElement('canvas');
      bgCanvasRef.current = bgCanvas;
      const maskCanvas = document.createElement('canvas');
      maskCanvasRef.current = maskCanvas;
      renderLoop();
    } catch (err) {
      console.error('Camera access error', err);
    }
  };

  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach((t) => t.stop());
      video.srcObject = null;
    }
    setStreaming(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const renderLoop = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const off = offscreenRef.current;
    const bgCanvas = bgCanvasRef.current;

    if (!video || !canvas || !off || !bgCanvas) return;

    const vw = video.videoWidth || 640;
    const vh = video.videoHeight || 480;
    if (canvas.width !== vw || canvas.height !== vh) {
      canvas.width = vw;
      canvas.height = vh;
      off.width = vw;
      off.height = vh;
      bgCanvas.width = vw;
      bgCanvas.height = vh;
      maskCanvasRef.current.width = vw;
      maskCanvasRef.current.height = vh;
    }

    const offCtx = off.getContext('2d');
    const outCtx = canvas.getContext('2d');
    const bgCtx = bgCanvas.getContext('2d');
    const maskCtx = maskCanvasRef.current.getContext('2d');

    offCtx.drawImage(video, 0, 0, vw, vh);

    const background = selectedBackgroundRef.current;
    bgCtx.clearRect(0, 0, vw, vh);

    if (background?.type === 'image' && bgLoadedRef.current && bgImageRef.current) {
      bgCtx.drawImage(bgImageRef.current, 0, 0, vw, vh);
    }

    if (chromaEnabledRef.current) {
      try {
        const frame = offCtx.getImageData(0, 0, vw, vh);
        const masked = applyChromaKey(frame, {
          threshold: thresholdRef.current,
          softness: softnessRef.current,
        });

        maskCtx.putImageData(masked, 0, 0);

        if (background?.type === 'image' && bgLoadedRef.current && bgImageRef.current) {
          outCtx.drawImage(bgCanvas, 0, 0, vw, vh);
        } else {
          outCtx.clearRect(0, 0, vw, vh);
        }

        outCtx.drawImage(maskCanvasRef.current, 0, 0, vw, vh);
      } catch (e) {
        outCtx.drawImage(video, 0, 0, vw, vh);
      }
    } else {
      outCtx.drawImage(video, 0, 0, vw, vh);
    }

    rafRef.current = requestAnimationFrame(renderLoop);
  };

  const handleCapture = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const data = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = data;
    a.download = 'y2k-capture.png';
    a.click();
  };

  return (
    <section className="rounded-bubble bg-white/30 backdrop-blur-md border border-white/50 p-4 shadow-soft">
      <h2 className="text-center text-xl font-semibold text-purple-700">Camera Preview</h2>

      <div className="mt-3">
        <div className="mb-3">
          <canvas ref={canvasRef} className="w-full max-h-[300px] rounded-2xl border border-white/40 bg-black" />
          <video ref={videoRef} style={{ display: 'none' }} playsInline />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            {!streaming ? (
              <button onClick={startCamera} className="rounded-2xl bg-gradient-accent px-5 py-3 font-semibold text-white shadow-soft">Start Camera</button>
            ) : (
              <button onClick={stopCamera} className="rounded-2xl bg-red-400 px-5 py-3 font-semibold text-white shadow-soft">Stop Camera</button>
            )}

            <button onClick={handleCapture} className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 px-5 py-3 font-semibold text-purple-700 shadow-soft">Capture</button>

            <button onClick={handleCapture} className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 px-5 py-3 font-semibold text-purple-700 shadow-soft">Download</button>
          </div>

          <div className="ml-auto space-y-2">
            <div>
              <label className="text-sm font-medium text-purple-700">Threshold: {threshold}</label>
              <input type="range" min="0" max="255" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} className="w-32 accent-purple-400" />
            </div>
            <div>
              <label className="text-sm font-medium text-purple-700">Softness: {softness}</label>
              <input type="range" min="1" max="150" value={softness} onChange={(e) => setSoftness(Number(e.target.value))} className="w-32 accent-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraPreview;
