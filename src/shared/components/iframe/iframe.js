/* eslint-disable no-console */
import React, { useRef } from 'react';

import './iframe.scss';

const Iframe = ({ title, src }) => {
  const iframeRef = useRef(null);

  return (
    <div className="iframe-container">
      <iframe
        ref={iframeRef}
        title={title}
        src={src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;
