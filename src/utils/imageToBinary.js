const BOUNDARY = 50;

const imageToBinary = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;
  for (var i = 0; i < imageData.length; i += 4) {
    const meanValue = (imageData[i] + imageData[i + 1] + imageData[i + 2]) / 3;
    let binaryValue = 255;
    if (meanValue > BOUNDARY) {
      binaryValue = 0;
    }
    imageData[i] = binaryValue; // red
    imageData[i + 1] = binaryValue; // green
    imageData[i + 2] = binaryValue; // blue
  }
  context.putImageData(image, 0, 0);
};

export default imageToBinary;
