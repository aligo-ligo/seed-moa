import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import { BottomSheet } from '@/components/common/bottomSheet';
import { Typography } from '@/components/common/typography/Typography';
import { CheerItem } from './CheerItem';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CheerUpBottomSheet = ({ isOpen, onClose: closeSheetHandler }: Props) => {
  const { id } = useParams();
  const { data } = useQuery(seedOptions.getCheeringUserList(Number(id)));

  const test = {
    cheererName: '이주영',
  };

  return (
    <BottomSheet open={isOpen} onDismiss={closeSheetHandler}>
      <div className="flex flex-col gap-2 px-4 py-4">
        <div className="flex justify-between items-center">
          <Typography type="heading1">응원해준 친구 목록</Typography>
          {data?.cheerCount === 0 ? (
            <Typography
              type="section1"
              className="text-center"
            >{`공유를 통해 \n 씨앗을 알려보세요`}</Typography>
          ) : (
            <Typography type="heading3">{data?.cheerCount}명</Typography>
          )}
        </div>
        <CheerItem cheererInfo={test} />
      </div>
    </BottomSheet>
  );
};

export default CheerUpBottomSheet;
