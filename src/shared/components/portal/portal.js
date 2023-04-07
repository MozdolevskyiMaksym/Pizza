import React, { Component } from 'react';
import Portal from '../../../utils/portal';

import './portal.scss';

class Modal extends Component {
  render() {
    const { isOpen, onClose, children } = this.props;
    return (
      <>
        {isOpen && (
          <Portal className="portal">
            <div className="portal__overlay" onClick={onClose}></div>
            <div className="portal__content">{children}</div>
          </Portal>
        )}
      </>
    );
  }
}

export default Modal;
