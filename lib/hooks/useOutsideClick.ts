import { RefObject, useCallback, useEffect } from 'react';

export default function useOutsideClick<T extends Element, E extends MouseEvent>(
  ref: RefObject<T>,
  fn: (e: E) => void,
) {
  let handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as any)) {
        fn(e as E);
      }
    },
    [fn, ref],
  );
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
