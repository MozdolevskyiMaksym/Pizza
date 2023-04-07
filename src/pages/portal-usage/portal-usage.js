import React from 'react';
import Modal from '../../shared/components/portal/portal';
import usePortalUsage from './use-portal-usage';

import './portal-usage.scss';

const PortalUsage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = usePortalUsage();

  return (
    <div className="portal-usage">
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Hello, World!</h2>
        <p>This is a modal window.</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default PortalUsage;
