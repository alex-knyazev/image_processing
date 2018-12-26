import React, { Component } from 'react';

import image from './face3.jpg';
import drawImageOnCanvas from '../utils/drawImageOnCanvas';
import drawRectangleOnCanvas from '../utils/drawRectangleOnCanvas';

class Gradations extends Component {
  constructor(props) {
    super(props);
    this.canvasEl = React.createRef();

    this.findFace = this.findFace.bind(this);
  }

  componentDidMount() {
    const {
      canvasEl: { current: canvasEl },
    } = this;
    drawImageOnCanvas(canvasEl, image);
  }

  findFace() {
    const {
      canvasEl: { current: canvasEl },
    } = this;

    // eslint-disable-next-line
    $('#picture').faceDetection({
      complete: function(faces) {
        drawRectangleOnCanvas(canvasEl, faces);
      },
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasEl} id="viewport" />
        <img id="picture" src={image} style={{ display: 'none' }} />
        <button onClick={this.findFace}>Найти лицо</button>
      </div>
    );
  }
}

export default Gradations;
