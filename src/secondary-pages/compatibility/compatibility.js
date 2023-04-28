import React from 'react';
import BrowserCompatibilityChecker from '../../shared/helpers/browser-compatibility-checker/browser-compatibility-checker';
import './compatibility.scss';

const Compatibility = () => {
  const renderCompatibilityMessage = () => {
    const { supportedBrowsers } = BrowserCompatibilityChecker();

    if (supportedBrowsers.isIE) {
      return (
        <div className="message warning">
          <h2>Your browser is not supported!</h2>
          <p>
            Please upgrade to a modern browser such as Chrome, Firefox or Edge.
          </p>
        </div>
      );
    } else {
      return (
        <div className="message success">
          <h2>Your browser is supported!</h2>
          <p>Thank you for using a modern browser.</p>
        </div>
      );
    }
  };

  return (
    <div className="browser-compatibility-checker">
      {renderCompatibilityMessage()}
    </div>
  );
};

export default Compatibility;
