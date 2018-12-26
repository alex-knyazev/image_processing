const PIXELS_STEP = 10; //чем больше шаг, тем меньше шумов
const RANDOM_MIN = 5;
const RANDOM_MAX = 20;
const INTERFERENCE_COLOR = [230, 230, 230]; //цвета (rgba) для шума

const makeSomeNoiseOnImage = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;
  //проходим по массиву пикселей, с шагом PIXELS_STEP
  for (var i = 0; i < imageData.length; i += PIXELS_STEP) {
    const rand = Math.floor(
      RANDOM_MIN + Math.random() * (RANDOM_MAX + 1 - RANDOM_MIN),
    );
    if (i % rand === 0) {
      imageData[i] = INTERFERENCE_COLOR[0]; // red
      imageData[i + 1] = INTERFERENCE_COLOR[1]; // green
      imageData[i + 2] = INTERFERENCE_COLOR[2]; // blue
    }
  }
  context.putImageData(image, 0, 0);
};

export default makeSomeNoiseOnImage;
