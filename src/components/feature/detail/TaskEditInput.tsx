import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export const TaskEditInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref) => {
    return (
      <input
        ref={ref}
        className="w-full mr-[20px] placeholder-gray-30 bg-transparent disabled:cursor-not-allowed focus-visible:outline-none disabled:opacity-50 border-none text-[16px] font-medium leading-[155%]"
        maxLength={30}
        {...props}
      />
    );
  },
);
TaskEditInput.displayName = 'TaskEditInput';
