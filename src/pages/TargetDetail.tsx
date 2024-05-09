import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import targetOptions from '@/api/target/queryOptions';
import Kakaotalk from '@/assets/icon/Kakaotalk';
import LinkIcon from '@/assets/icon/Link';
import TrashIcon from '@/assets/icon/TrashIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Tag } from '@/components/common/tag';
import { ToolTip } from '@/components/common/toolTip';
import { Typography } from '@/components/common/typography/Typography';
import ObserverExitEvent from '@/components/feature/detail/animatedBox/OpacityBox';
import ConfirmBottomSheet from '@/components/feature/detail/ConfirmBottomSheet';
import TaskList from '@/components/feature/detail/TaskList';
import Timer from '@/components/feature/detail/timer/Timer';
import { seedStateObj } from '@/components/target/TargetCard';
import { DELAY_SECOND } from '@/constants/contants';
import useBottomSheetState from '@/hooks/useBottomSheetState';
import useDeleteSeedMutation from '@/hooks/useDeleteSeedMutation';

type BottomSheetType = 'askDelete';

const TargetDetail = () => {
  const { id } = useParams();
  const { data: seed } = useSuspenseQuery(targetOptions.detailTarget(Number(id)));
  const { mutate } = useDeleteSeedMutation();
  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();
  const isFirstVisited = seed.completedRoutineCount === 0;
  const totalRoutineCount =
    dayjs(seed.endDate).diff(seed.startDate, 'day') * seed.routineDetails.length;

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6">
      <Suspense fallback={<></>}>
        <Header>
          <Header.Previous />
          <button onClick={() => onOpenSheet('askDelete')}>
            <TrashIcon width={32} color="#fff" />
          </button>
        </Header>
      </Suspense>

      <Typography type="heading1" className="pointer-events-none text-white text-left w-full">
        {seed.seed}
      </Typography>

      <div className="flex flex-col w-full h-full">
        <div className=" h-[40%] flex flex-col justify-center items-center">
          <div className="relative flex w-full justify-end">
            <Tag className="">{`${seed.completedRoutineCount}/${totalRoutineCount}`}</Tag>
            {!isFirstVisited && (
              <div className="absolute w-full justify-end flex -top-14 -right-3">
                <Timer delay={DELAY_SECOND} mountKey="tooltip">
                  <ObserverExitEvent>
                    <ToolTip title={`${totalRoutineCount - seed.completedRoutineCount}번만 더!`} />
                  </ObserverExitEvent>
                </Timer>
              </div>
            )}
          </div>

          <div className="w-48">{seedStateObj[seed.seedState]}</div>
        </div>
        <TaskList tasks={seed.routineDetails} />
      </div>

      <ConfirmBottomSheet
        isOpen={openedSheet === 'askDelete'}
        onClose={onCloseSheet}
        title="씨앗을 삭제하시겠어요?"
        description="씨앗을 삭제하면 되돌릴 수 없어요."
        PrimaryButton={
          <Button
            width="full"
            className="h-[52px]"
            onClick={() => {
              console.log('click after');
              onCloseSheet();
              mutate(Number(id));
            }}
          >
            확인
          </Button>
        }
        SecondaryButton={
          <Button variant="secondary" width="full" onClick={() => onCloseSheet()}>
            취소
          </Button>
        }
      />

      <div className="absolute bottom-5 text-xl w-full text-white ">
        <div className="flex flex-col justify-center items-center">
          <Typography type="heading3">키우고 있는 씨앗 공유하기</Typography>
          <div className="flex w-full h-[52px] justify-center gap-3">
            <Button
              width="fit"
              Icon={<LinkIcon width={20} height={20} />}
              iconOnly
              className="rounded-[100%] bg-gray-600"
            />
            <Button
              // onClick={handleSendMessage}
              Icon={<Kakaotalk width={20} height={20} color="black" />}
              iconOnly
              className="rounded-[100%] bg-[#FEE500]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetDetail;
