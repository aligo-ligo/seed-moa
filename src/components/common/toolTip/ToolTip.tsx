import ReverseTriangleIcon from '@/assets/icon/ReverseTriangleIcon';
import { colors } from '@/styles/theme/color';
import { Typography } from '../typography/Typography';

interface ToolTipProps {
  title: string;
}

export const ToolTip = ({ title }: ToolTipProps) => {
  return (
    <div className="relative w-fit px-3 py-2 flex items-center justify-center bg-primary-100 rounded-xl ">
      <Typography type="section1" className="text-priamry-400">
        {title}
      </Typography>
      <div className="absolute bottom-[-9px]">
        <ReverseTriangleIcon width={14} height={10} fill={colors.primary[100]} />
      </div>
    </div>
  );
};
