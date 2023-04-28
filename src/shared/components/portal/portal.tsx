import React, { Component } from 'react';
import Portal from '../../../utils/portal';
// import Portal from '@/utils/portal';

import './portal.scss';

type ModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

class Modal extends Component<ModalPropsType> {
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
