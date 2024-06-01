import { cva } from 'class-variance-authority';

export const tagVariants = cva('flex w-fit select-none items-center justify-center rounded-xl', {
  variants: {
    variant: {
      primary: 'text-mainDeep bg-primary-100',
      secondary:'bg-[#FFE5E5] text-red-700',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
