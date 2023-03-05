import classNames from 'classnames';
import { HTMLProps } from 'react';

export type CheckboxProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
} & HTMLProps<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps) => {
  const { children, className = '', id, ...rest } = props;

  return (
    <div className={classNames(className)}>
      <input type="checkbox" id={id} className="peer/cb hidden" {...rest} />
      <label
        htmlFor={id}
        className="hover:text-mediumBlue-500 cursor-pointer text-slate-300 peer-checked/cb:hidden"
      >
        <svg width={22} height={22} fill="none">
          <path stroke="#fff" strokeOpacity={0.3} d="M.5.5h21v21H.5z" />
        </svg>
      </label>
      <label htmlFor={id} className="hidden peer-checked/cb:block">
        <svg width={22} height={22} fill="none">
          <path stroke="#fff" strokeOpacity={0.3} d="M.5.5h21v21H.5z" />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={2}
            d="m3 8.33 3 3L12.67 4"
            transform="translate(3.5 3)"
          />
        </svg>
      </label>
    </div>
  );
};
