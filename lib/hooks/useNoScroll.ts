import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export function useNoScroll(flag: boolean) {
  useEffect(() => {
    if (flag) {
      disableBodyScroll(document.getElementById('__next')!);
    } else {
      enableBodyScroll(document.getElementById('__next')!);
    }
    return () => clearAllBodyScrollLocks();
  }, [flag]);
}
