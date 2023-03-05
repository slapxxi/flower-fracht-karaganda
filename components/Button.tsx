import classNames from 'classnames';
import { HTMLProps } from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  type?: any;
} & HTMLProps<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, className = '', ...rest } = props;
  return (
    <button className={classNames(className, 'button')} {...rest}>
      {children}
    </button>
  );
};
