import { createPortal } from 'react-dom';
import { useMounted } from 'lib/hooks/useMounted';

export type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export const Modal = (props: ModalProps) => {
  const { children, open = false } = props;
  let mounted = useMounted();

  if (mounted && open) {
    return createPortal(children, document.getElementById('__next')!);
  }

  return null;
};
