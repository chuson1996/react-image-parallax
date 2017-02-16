import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageParallax from './lib/react-image-parallax.js';
import CssToMatrix from 'css-to-matrix';

ReactDOM.render(
  <div style={{
    paddingTop: '80vh',
    paddingBottom: '100vh'
  }}>
    <h1>Scroll to see the magic happen</h1>
    <ReactImageParallax scale={1.5}>
      {({y}, onImageLoad) =>
        <img
          style={{
            transform: new CssToMatrix()
              .scale(1.5, 1.5)
              .translate(0, y)
              .getMatrixCSS()
          }}
          onLoad={onImageLoad}
          width={'100%'}
          src={'https://cdn.pixabay.com/photo/2017/01/21/01/11/the-pink-panter-1996281_1280.jpg'}
          alt="thumbnail"/>
      }
    </ReactImageParallax>
  </div>,
  document.querySelector('#main'));
