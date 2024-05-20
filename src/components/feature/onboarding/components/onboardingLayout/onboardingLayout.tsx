import type { ReactNode } from 'react';

import { Typography } from '@/components/common/typography/Typography';

export interface OnboardingLayoutProps {
  title: string | ReactNode;
}

export const OnboardingLayout = ({ title }: OnboardingLayoutProps) => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full">
        <Typography type="heading1" className="text-blue-50 mr-auto">
          {title}
        </Typography>
        {/* <div className="w-full h-[60vh] flex justify-center items-center">{sticker}</div> */}
      </div>
    </section>
  );
};
