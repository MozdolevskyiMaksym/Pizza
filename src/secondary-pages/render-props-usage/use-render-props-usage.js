import { useState } from 'react';
import useValueWithEffect from '../../shared/hooks/use-value-with-effect';
import useWindowSize from '../../shared/hooks/use-window-size';

const useRenderPropsUsage = () => {
  const [count, setCount] = useState(0);
  const { width, height } = useWindowSize();

  useValueWithEffect(count, (value) => {
    // eslint-disable-next-line no-console
    console.log(`Value changed: ${value}`);
  });

  const onIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return {
    count,
    onIncreaseCount,
    width,
    height,
  };
};

export default useRenderPropsUsage;
