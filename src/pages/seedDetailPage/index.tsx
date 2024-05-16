import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Suspense, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import targetOptions from '@/api/target/queryOptions';
import LinkIcon from '@/assets/icon/Link';
import Profile from '@/assets/icon/Profile';
import TrashIcon from '@/assets/icon/TrashIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Tag } from '@/components/common/tag';
import { ToolTip } from '@/components/common/toolTip';
import { Typography } from '@/components/common/typography/Typography';
import ObserverExitEvent from '@/components/feature/detail/animatedBox/OpacityBox';
import ConfirmBottomSheet from '@/components/feature/detail/ConfirmBottomSheet';
import RainBackGround from '@/components/feature/detail/RainBackGround';
import TaskList from '@/components/feature/detail/TaskList';
import { detailSeedStateObj } from '@/components/target/\bseedCard';
import useAuth from '@/hooks/auth/useAuth';
import useBottomSheetState from '@/hooks/useBottomSheetState';
import useDeleteSeedMutation from '@/hooks/useDeleteSeedMutation';
import useToast from '@/hooks/useToast';
import { shareLink } from '@/utils/share';

type BottomSheetType = 'askDelete';

const SeedDetailPage = () => {
  const { isLoggedIn } = useAuth();
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const locations = useLocation();
  const searchParams = new URLSearchParams(locations.search);
  const shareValue = searchParams.get('share');
  const isShared = typeof shareValue === 'string' ? true : false;

  const { data: seed } = useSuspenseQuery(targetOptions.detailTarget(Number(id), !isDeleted));
  const { mutate } = useDeleteSeedMutation();
  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();
  const totalRoutineCount =
    dayjs(seed.endDate).diff(seed.startDate, 'day') * seed.routineDetails.length;
  const toast = useToast();

  console.log('isLoggedIn', isLoggedIn);

  const handleCopyClipboard = () => {
    try {
      shareLink({ url: `${location.href}?share=true` });
      toast({ message: 'LINK_COPIED' });
    } catch (error) {
      toast({ message: 'LINK_COPIED_FAIL' });
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6 overflow-hidden">
      <Suspense fallback={<></>}>
        <Header>
          {isShared ? (
            <Header>
              <Header.Logo />
              <Link to={'/'}>
                <Profile width={32} />
              </Link>
            </Header>
          ) : (
            <>
              <Header.Previous />
              <button onClick={() => onOpenSheet('askDelete')}>
                <TrashIcon width={32} color="#fff" />
              </button>
            </>
          )}
        </Header>
      </Suspense>

      <Typography type="heading1" className="pointer-events-none text-white text-left w-full">
        {seed.seed}
      </Typography>

      <div className="flex flex-col w-full h-full">
        <div className=" h-[50%] flex flex-col justify-center items-center">
          <div className="relative flex w-full justify-end">
            <Tag>{`${seed.completedRoutineCount}/${totalRoutineCount}`}</Tag>
            <div className="absolute w-full justify-end flex -top-14 -right-3">
              <ObserverExitEvent>
                <ToolTip title={`${totalRoutineCount - seed.completedRoutineCount}번만 더!`} />
              </ObserverExitEvent>
            </div>
          </div>

          <div>{detailSeedStateObj[seed.seedState]}</div>
        </div>
        <TaskList tasks={seed.routineDetails} isShared={isShared} />
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
              // 선 씨앗 체크 API
              mutate(Number(id));
              setIsDeleted(true);
              navigate('/target');
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

      {!isShared && (
        <div className="absolute bottom-5 text-xl w-full text-white">
          <div className="flex flex-col justify-center items-center ">
            <Typography type="heading3">키우고 있는 씨앗 공유하기</Typography>
            <div className="flex size-[52px] justify-center gap-3 mt-3">
              <Button
                onClick={handleCopyClipboard}
                width="full"
                Icon={<LinkIcon width={20} height={20} />}
                iconOnly
                className="rounded-[100%] bg-gray-600"
              />
            </div>
          </div>
        </div>
      )}

      <RainBackGround />
    </div>
  );
};

export default SeedDetailPage;
