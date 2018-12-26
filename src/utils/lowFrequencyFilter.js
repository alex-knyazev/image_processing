const lowFrequenceyFilter = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;
  for (
    var i = image.width * 4 + 4;
    i < imageData.length - (image.width * 4 - 4);
    i += 4
  ) {
    const windowCoeffs = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
    const windowValues = getWindowValues(imageData, image.width, i);
    let temp = 0;
    for (let i = 0; i < windowValues.length; i++) {
      for (let j = 0; j < windowValues.length; j++) {
        temp += windowValues[i][j] * windowCoeffs[i][j];
      }
    }
    temp = temp / 9;
    imageData[i] = temp; // red
    imageData[i + 1] = temp; // green
    imageData[i + 2] = temp; // blue
  }
  context.putImageData(image, 0, 0);
};

const getWindowValues = (imageData, width, index) => {
  const windowValues = [
    [
      imageData[index - width * 4 - 4],
      imageData[index - width * 4],
      imageData[index - width * 4 + 4],
    ],
    [imageData[index - 4], imageData[index], imageData[index + 4]],
    [
      imageData[index + width * 4 - 4],
      imageData[index + width * 4],
      imageData[index + width * 4 + 4],
    ],
  ];
  return windowValues;
};

export default lowFrequenceyFilter;
