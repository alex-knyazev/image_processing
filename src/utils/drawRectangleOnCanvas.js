const drawRectangleOnCanvas = (canvasEl, faces) => {
  const context = canvasEl.getContext('2d');
  const face = faces[0];
  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(face.offsetX, face.offsetY);
  context.lineTo(face.offsetX, face.offsetY + face.width);
  context.lineTo(face.offsetX + face.height, face.offsetY + face.width);
  context.lineTo(face.offsetX + face.height, face.offsetY);
  context.lineTo(face.offsetX, face.offsetY);
  context.stroke();
};

export default drawRectangleOnCanvas;
