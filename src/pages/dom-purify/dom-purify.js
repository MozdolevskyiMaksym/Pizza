import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import './dom-purify.scss';

const SanitizedComponent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="sanitized-component">
      <div
        className="sanitized-component__content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
  );
};

SanitizedComponent.propTypes = {
  content: PropTypes.string.isRequired,
};

const DomPurify = () => {
  const content = '<script>alert("XSS attack!");</script><p>Sanitized Content</p>';

  return (
    <div className="dom-purify">
      <SanitizedComponent content={content} />
    </div>
  );
};

export default DomPurify;