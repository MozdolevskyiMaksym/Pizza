import React from 'react';
import { Link } from 'react-router-dom';
import WithHover from '../../../shared/hocs/with-hover/with-hover';

import './additional-components-card.scss';

class AdditionalComponentsCard extends React.Component {
  render() {
    const { item, isHovered } = this.props;

    return (
      <div
        className={`additional-components-card ${isHovered ? 'isHovered' : ''}`}
      >
        <Link to={`/${item.path}`} className="additional-components-card__link">
          {item.name}
        </Link>
      </div>
    );
  }
}

export default WithHover(AdditionalComponentsCard);
