const RED_MODIFICATOR = 0.3;
const GREEN_MODIFICATOR = 0.59;
const BLUE_MODIFICATOR = 0.12;

const imageToHalftone = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;
  for (var i = 0; i < imageData.length; i += 4) {
    imageData[i] = imageData[i] * RED_MODIFICATOR; // red
    imageData[i + 1] = imageData[i + 1] * GREEN_MODIFICATOR; // green
    imageData[i + 2] = imageData[i + 1] * BLUE_MODIFICATOR; // blue
  }
  context.putImageData(image, 0, 0);
};

export default imageToHalftone;
