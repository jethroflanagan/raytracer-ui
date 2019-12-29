import React, { Component } from 'react';
import { renderScene, setupSeed } from 'typescript-raytracer';
import { create as createScene } from './testScene';


export class Raytracer extends Component {
  componentDidMount() {
    setupSeed('test');
  }

  async renderScene() {

    const canvas = this.refs.render;
    const width = canvas.width;
    const height = canvas.height;
    const aspectRatio = width / height;
    const { scene, camera } = await createScene({ aspectRatio });

    renderScene({
      canvas,
      // ui: document.getElementById('ui'),
      renderBlock: this.refs.renderBlock,
      scene,
      camera,
    });
  }

  render() {
    return (
      <div>
        <canvas width="800" height="400" ref="render"></canvas>
        <div ref="render-block"></div>
      </div>
    );
  }
}
