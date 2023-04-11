const BrowserCompatibilityChecker = () => {
  const isIE =
    window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1;
  // const isIE = /Trident|MSIE/.test(navigator.userAgent); //
  const isEdge = window.navigator.userAgent.indexOf('Edge/') > -1;
  // const isEdge = /Edge/.test(navigator.userAgent);
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  // const isChrome2 = /Chrome/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const supportedBrowsers = {
    ie: isIE,
    edge: isEdge,
    firefox: isFirefox,
    chrome: isChrome,
    safari: isSafari,
  };

  const isGridSupported = () => {
    const el = document.createElement('div');
    el.style.display = 'grid';
    return el.style.display === 'grid';
  };

  const isFetchSupported = typeof window.fetch === 'undefined';
  const isObjectAssignSupported = typeof Object.assign === 'undefined';

  return {
    supportedBrowsers,
    isGridSupported,
    isFetchSupported,
    isObjectAssignSupported,
  };
};

export default BrowserCompatibilityChecker;
