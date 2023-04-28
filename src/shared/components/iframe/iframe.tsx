/* eslint-disable no-console */
import React, { useRef } from 'react';

import './iframe.scss';

type IframePropsType = {
  title: string;
  src: string;
};

const Iframe = ({ title, src }: IframePropsType) => {
  const iframeRef = useRef(null);

  return (
    <div className="iframe-container">
      <iframe ref={iframeRef} title={title} src={src} allowFullScreen></iframe>
    </div>
  );
};

export default Iframe;
