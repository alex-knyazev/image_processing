import React, { Component } from 'react';

import image from './face3.jpg';
import drawImageOnCanvas from '../utils/drawImageOnCanvas';
import imageToHalftone from '../utils/imageToHalftone';
import imageToBinary from '../utils/imageToBinary';
import imageToNegative from '../utils/imageToNegative';

class Gradations extends Component {
  constructor(props) {
    super(props);
    this.canvasEl = React.createRef();
    this.translateToHalftone = this.translateToHalftone.bind(this);
    this.translateToBinary = this.translateToBinary.bind(this);
    this.translateToNegative = this.translateToNegative.bind(this);

    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    drawImageOnCanvas(canvasEl, image);
  }

  reset() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    drawImageOnCanvas(canvasEl, image);
  }

  translateToHalftone() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    imageToHalftone(canvasEl);
  }

  translateToBinary() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    imageToBinary(canvasEl);
  }

  translateToNegative() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    imageToNegative(canvasEl);
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasEl} id="viewport" />
        <br />
        <button onClick={this.reset}>Сбросить</button>
        <br />
        <button onClick={this.translateToHalftone}>
          Преобразовать в полутоновое
        </button>
        <button onClick={this.translateToBinary}>
          Преобразовать в бинарное
        </button>
        <button onClick={this.translateToNegative}>
          Преобразовать в негатив
        </button>
      </div>
    );
  }
}

export default Gradations;
