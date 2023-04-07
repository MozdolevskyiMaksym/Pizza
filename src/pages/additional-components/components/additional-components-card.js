import React from 'react';

import './additional-components-card.scss';
import { Link } from 'react-router-dom';

const AdditionalComponentsCard = ({ item }) => {
  return (
    <div className="additional-components-card">
      <Link to={`/${item.path}`} className="additional-components-card__link">
        {item.name}
      </Link>
    </div>
  );
};

export default AdditionalComponentsCard;
