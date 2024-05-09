import { cva } from 'class-variance-authority';

export const toastVariants = cva(
  'flex w-full items-center gap-2 rounded-md bg-primary-100 px-4 py-[0.875rem] text-sm',
  {
    variants: {
      type: {
        default: 'text-gray-1000',
        warning: 'text-warning',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
);
