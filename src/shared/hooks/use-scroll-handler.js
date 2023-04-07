import { useState, useEffect } from 'react';

const useScrollHandler = () => {
  const [headerClass, setHeaderClass] = useState('no-fix');

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      if (scrollCheck) {
        setHeaderClass('fix-header');
      } else {
        setHeaderClass('no-fix');
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [headerClass, setHeaderClass]);

  return headerClass;
};

export default useScrollHandler;
