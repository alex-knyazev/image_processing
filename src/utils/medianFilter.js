const medianFilter = canvasEl => {
  const { width, height } = canvasEl;
  const context = canvasEl.getContext('2d');
  const image = context.getImageData(0, 0, width, height);
  const imageData = image.data;
  for (
    var i = image.width * 4 + 8;
    i < imageData.length - (image.width * 4 - 8);
    i += 4
  ) {
    const newValue = getMedian(imageData, image.width, i);
    imageData[i] = newValue; // red
    imageData[i + 1] = newValue; // green
    imageData[i + 2] = newValue; // blue
  }
  context.putImageData(image, 0, 0);
};

const getMedian = (imageData, width, index) => {
  const windowValues = [
    [
      imageData[index - width * 4 - 8],
      imageData[index - width * 4 - 4],
      imageData[index - width * 4],
      imageData[index - width * 4 + 4],
      imageData[index - width * 4 + 8],
    ],
    [
      imageData[index - 8],
      imageData[index - 4],
      imageData[index],
      imageData[index + 4],
      imageData[index + 8],
    ],
    [
      imageData[index + width * 4 - 8],
      imageData[index + width * 4 - 4],
      imageData[index + width * 4],
      imageData[index + width * 4 + 4],
      imageData[index + width * 4 + 8],
    ],
  ];

  const sorted = windowValues
    .reduce((current, el) => [...current, ...el], [])
    .sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  return median;
};

export default medianFilter;
