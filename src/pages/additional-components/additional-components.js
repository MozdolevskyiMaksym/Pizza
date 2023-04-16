import React from 'react';
import useAdditionalComponents from './use-additional-components';
import AdditionalComponentsCard from './components/additional-components-card';

import './additional-components.scss';

const AdditionalComponents = () => {
  const { components } = useAdditionalComponents();

  return (
    <div className="additional-components">
      {components.map((item) => (
        <AdditionalComponentsCard item={item} key={item.path} />
      ))}
    </div>
  );
};

export default AdditionalComponents;
