import { useState } from 'react';

const usePortalUsage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default usePortalUsage;
