import { useEffect, useRef } from 'react';

const useValueWithEffect = (value, effect) => {
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    effect(valueRef.current);
  }, [effect]);
};

export default useValueWithEffect;
