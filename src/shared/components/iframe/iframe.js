import React from 'react';
import './iframe.scss';

const Iframe = ({ title, src }) => {
  return (
    <div className="iframe-container">
      <iframe title={title} src={src} frameBorder="0" allowfullscreen></iframe>
    </div>
  );
};

export default Iframe;
