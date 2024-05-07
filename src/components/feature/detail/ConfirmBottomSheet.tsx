import { BottomSheet } from '@/components/common/bottomSheet';
import { Typography } from '@/components/common/typography/Typography';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  PrimaryButton: React.ReactNode;
  SecondaryButton: React.ReactNode;
};

const ConfirmBottomSheet = ({
  isOpen,
  onClose: closeSheetHandler,
  title,
  description,
  PrimaryButton,
  SecondaryButton,
}: Props) => {
  return (
    <BottomSheet open={isOpen} onDismiss={closeSheetHandler}>
      <div className="flex flex-col gap-2 px-4 py-4">
        <Typography type="heading1">{title}</Typography>
        {description && (
          <Typography type="body1" className="text-gray-500">
            {description}
          </Typography>
        )}
        <div className="mt-4 flex gap-3">
          {SecondaryButton}
          {PrimaryButton}
        </div>
      </div>
    </BottomSheet>
  );
};

export default ConfirmBottomSheet;
