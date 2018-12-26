const drawImageOnCanvas = (canvasEl, imageURL) => {
  const context = canvasEl.getContext('2d');
  const baseImage = new Image();
  baseImage.src = imageURL;
  baseImage.onload = () => {
    canvasEl.width = baseImage.width;
    canvasEl.height = baseImage.height;
    context.drawImage(baseImage, 0, 0);
  };
};

export default drawImageOnCanvas;
