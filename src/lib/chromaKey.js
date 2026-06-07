export function applyChromaKey(videoImageData, options = {}) {
  const { threshold = 60, softness = 40 } = options;
  const width = videoImageData.width;
  const height = videoImageData.height;
  const vdata = videoImageData.data;
  const safeSoftness = Math.max(1, softness);
  const out = new Uint8ClampedArray(vdata.length);

  for (let i = 0; i < vdata.length; i += 4) {
    const r = vdata[i];
    const g = vdata[i + 1];
    const b = vdata[i + 2];
    const maxRB = r > b ? r : b;
    const greenDiff = g - maxRB;
    let alpha255 = 255;

    if (greenDiff > threshold) {
      const excess = greenDiff - threshold;
      const factor = Math.min(1, excess / safeSoftness);
      alpha255 = Math.round(255 * (1 - factor));
    }

    out[i] = vdata[i];
    out[i + 1] = vdata[i + 1];
    out[i + 2] = vdata[i + 2];
    out[i + 3] = alpha255;
  }

  return new ImageData(out, width, height);
}
