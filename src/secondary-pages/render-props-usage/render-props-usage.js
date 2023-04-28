import React from 'react';
import RenderPropsComponent from '../../shared/components/render-props/render-props';

import './render-props-usage.scss';
import useRenderPropsUsage from './use-render-props-usage';

const RenderPropsUsage = () => {
  const { count, width, height, onIncreaseCount } = useRenderPropsUsage();

  return (
    <div className="render-props-usage">
      <RenderPropsComponent render={() => <h1>Hello, World!</h1>} />
      <RenderPropsComponent
        render={() => (
          <p>
            Width: {width}, Height: {height}{' '}
          </p>
        )}
      />
      <RenderPropsComponent
        render={() => (
          <div>
            <button style={{ marginRight: '10px' }} onClick={onIncreaseCount}>
              Increase
            </button>
            <span>{count}</span>
          </div>
        )}
      />
    </div>
  );
};

export default RenderPropsUsage;
