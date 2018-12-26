const imageToNegative = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;
  for (var i = 0; i < imageData.length; i += 4) {
    imageData[i] = 255 - imageData[i]; // red
    imageData[i + 1] = 255 - imageData[i + 1]; // green
    imageData[i + 2] = 255 - imageData[i + 1]; // blue
  }
  context.putImageData(image, 0, 0);
};

export default imageToNegative;
