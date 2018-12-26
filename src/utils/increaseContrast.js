const increaseContrast = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;

  let maxBright = 0;
  let minBright = 255;
  for (var i = 0; i < imageData.length; i += 4) {
    const bright = getBright(imageData, i);
    if (bright < minBright) {
      minBright = bright;
    }
    if (bright > maxBright) {
      maxBright = bright;
    }
  }

  for (var i = 0; i < imageData.length; i += 4) {
    const bright = getBright(imageData, i);
    const newBright =
      ((bright - minBright) / (maxBright - minBright)) * (255 - 0);

    imageData[i] = newBright; // red
    imageData[i + 1] = newBright; // green
    imageData[i + 2] = newBright; // blue
  }
  context.putImageData(image, 0, 0);
};

function getBright(imageData, index) {
  return (imageData[index] + imageData[index + 1] + imageData[index + 2]) / 3;
}

export default increaseContrast;
