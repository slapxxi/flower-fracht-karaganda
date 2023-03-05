import classNames from 'classnames';

export type LogoProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Logo = (props: LogoProps) => {
  const { children, className = '', ...rest } = props;

  return (
    <svg fill="none" viewBox="0 0 1261 510" className={classNames(className)} {...rest}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 0h510v510H0zM224.5 388.5h-73v-204l73-62.5h174l-67 62.5h-107V220h107v62.5h-107v106Z"
      />
      <text xmlSpace="preserve" fill="#fff" fontFamily="Inter,sans-serif" fontSize={128} letterSpacing="0em">
        <tspan x={609} y={138.04}>
          {'Flower\n'}
        </tspan>
        <tspan x={609} y={293.05}>
          {'Fracht\n'}
        </tspan>
        <tspan x={609} y={448.05}>
          {'Karaganda'}
        </tspan>
      </text>
    </svg>
  );
};
