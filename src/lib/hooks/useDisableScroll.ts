import { useEffect } from 'react';

const useDisableScroll = (isOpen: boolean) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);
};

export default useDisableScroll;
