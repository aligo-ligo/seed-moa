import { HTMLAttributes } from 'react';

import LogoSVG from '@/assets/logo/Logo';
import { cn } from '@/libs/core';
import { Typography } from '../typography/Typography';
import Previous from './components/Previous';

type HeaderProps = { children: React.ReactNode } & HTMLAttributes<HTMLElement>;
const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'sticky bg-inherit top-0 z-50 h-[68px] flex w-full items-center justify-between',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
};

const Logo = () => {
  return <LogoSVG width={32} height={68} className="ml-1" />;
};

type TextProps = {
  text: string;
};
const Text = ({ text }: TextProps) => {
  return (
    <Typography type="body1" className="text-white">
      {text}
    </Typography>
  );
};

export default Object.assign(Header, {
  Logo,
  Text,
  Previous,
});
