import classNames from 'classnames';
import { SVGProps } from 'react';

export type PlaneIconProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
} & SVGProps<SVGSVGElement>;

export const PlaneIcon = (props: PlaneIconProps) => {
  const { children, className = '', size = 17, ...rest } = props;

  return (
    <svg
      width={size}
      height={size * (12 / 17)}
      viewBox="0 0 17 12"
      className={classNames(className, 'fill-white')}
      preserveAspectRatio="none"
      {...rest}
    >
      <path d="M.7 3.53 2.21 5.2l-.47-.01c-.14.04-.23.12-.24.25l.01 1.4c0 .1.03.15.1.18.06.07.1.09.18.09l5-.03.29-.53.4-.7c.05-.1.2-.12.25-.06.07.04.09.1.09.18-.02.04 0 .08 0 .12l-2.8 4.86c.07.12.2.22.33.23.2.05.48-.09.76-.4l4.53-4.83.14-.12c.1-.09.2-.08.27 0 .1.08.07.2 0 .26l-.42.46-.5.52 3.92-.04c1.15 0 2.03-.7 2-1.54a1.31 1.31 0 0 0-.64-1.08c-.4-.27-.9-.42-1.4-.38l-4.4.05L6.4.7C5.95.3 5.56.1 5.19.21c-.29.08-.57.3-.7.59a.23.23 0 0 0 .03.23l1.82 3.02-1.86.02-2.24-1.8a.36.36 0 0 0-.35 0l-1.13.84c-.13.09-.16.24-.06.42.02-.03.02-.03 0 0Z" />
      {children}
    </svg>
  );
};
