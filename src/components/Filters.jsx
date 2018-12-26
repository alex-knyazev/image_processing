import React, { Component } from 'react';

import image from './lui.jpg';
import drawImageOnCanvas from '../utils/drawImageOnCanvas';
import makeSomeNoiseOnImage from '../utils/makeSomeNoiseOnImage';
import lowFrequencyFilterOnImage from '../utils/lowFrequencyFilter';
import medianFilterOnImage from '../utils/medianFilter';
import highFrequencyFilterOnImage from '../utils/highFrequencyFilter';
import increaseContrastOnImage from '../utils/increaseContrast';

class Gradations extends Component {
  constructor(props) {
    super(props);
    this.canvasEl = React.createRef();
    this.makeSomeNoise = this.makeSomeNoise.bind(this);
    this.lowFrequencyFilter = this.lowFrequencyFilter.bind(this);
    this.highFrequencyFilter = this.highFrequencyFilter.bind(this);
    this.medianFilter = this.medianFilter.bind(this);
    this.increaseContrast = this.increaseContrast.bind(this);
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

  makeSomeNoise() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    makeSomeNoiseOnImage(canvasEl);
  }

  lowFrequencyFilter() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    lowFrequencyFilterOnImage(canvasEl);
  }

  highFrequencyFilter() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    highFrequencyFilterOnImage(canvasEl);
  }

  medianFilter() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    medianFilterOnImage(canvasEl);
  }

  increaseContrast() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    increaseContrastOnImage(canvasEl);
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasEl} id="viewport" />
        <br />
        <button onClick={this.reset}>Сбросить</button>
        <br />
        <button onClick={this.makeSomeNoise}>Наложить шум</button>
        <button onClick={this.lowFrequencyFilter}>НЧ фильтр</button>
        <button onClick={this.highFrequencyFilter}>ВЧ фильтр</button>
        <button onClick={this.medianFilter}>Медианный фильтр</button>
        <button onClick={this.increaseContrast}>Увеличить контрастность</button>
      </div>
    );
  }
}

export default Gradations;
