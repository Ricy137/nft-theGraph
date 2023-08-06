import React, { forwardRef, type PropsWithChildren } from 'react';
import cx from 'clsx';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  loading?: boolean | 'start' | 'end';
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ children, className, disabled = false, fullWidth = false, loading = false, ...props }, _forwardRef) => {
    return (
      <button
        className={cx(
          'px-[40px] flex flex-row justify-center items-center h-[36px] whitespace-nowrap cursor-pointer text-[16px] rounded-[30px] leading-[24px] bg-[rgb(252,124,197)] text-[#ffffff] shadow-[rgba(252,124,197,0.6)_0px_6px_0px_0px,_rgba(255,255,255,0.25)_0px_4px_0px_0px_inset] hover:bg-[rgb(238,95,177)] hover:text-[#F1F1F3]',
          loading || disabled
            ? 'bg-gray-400 !shadow-[rgba(247,248,250,0.3)_0px_6px_0px_0px,_rgba(247,248,250,0.3)_0px_4px_0px_0px_inset] pointer-events-none cursor-not-allowed'
            : 'shadow-[rgba(252,124,197,0.6)_0px_6px_0px_0px,_rgba(255,255,255,0.25)_0px_4px_0px_0px_inset]',
          fullWidth ? 'w-full' : 'w-fit',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
