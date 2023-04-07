import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './render-props.scss';

class RenderPropsComponent extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  render() {
    const { render } = this.props;
    return <div className="render-props">{render()}</div>;
  }
}

export default RenderPropsComponent;
