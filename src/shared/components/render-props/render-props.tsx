import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import './render-props.scss';

type RenderPropsComponentPropsType = {
  render: () => ReactNode;
};

class RenderPropsComponent extends Component<RenderPropsComponentPropsType> {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  render() {
    const { render } = this.props;
    return <div className="render-props">{render()}</div>;
  }
}

export default RenderPropsComponent;
