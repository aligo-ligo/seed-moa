import { Suspense, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import LinkIcon from '@/assets/icon/Link';
import Profile from '@/assets/icon/Profile';
import TrashIcon from '@/assets/icon/TrashIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import ConfirmBottomSheet from '@/components/feature/detail/ConfirmBottomSheet';
import RainBackGround from '@/components/feature/detail/RainBackGround';
import SeedDetailPageBody from '@/components/feature/seed/seedDetailPageBody';
import useBottomSheetState from '@/hooks/useBottomSheetState';
import useDeleteSeedMutation from '@/hooks/useDeleteSeedMutation';
import useToast from '@/hooks/useToast';
import { shareLink } from '@/utils/share';

type BottomSheetType = 'askDelete';

const SeedDetailPage = () => {
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const locations = useLocation();
  const toast = useToast();
  const searchParams = new URLSearchParams(locations.search);

  //TODO: 공유를 통해 들어온 유저 분별하는 로직 깔끔하게 분리하는 방법 찾아보자
  const shareValue = searchParams.get('share');
  const isShared = typeof shareValue === 'string' ? true : false;

  const { mutate } = useDeleteSeedMutation();

  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();

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

      <Suspense
        fallback={
          <div className="flex justify-center">
            <Spinner />
          </div>
        }
      >
        <SeedDetailPageBody seedId={Number(id)} isDeleted={isDeleted} isShared={isShared} />
      </Suspense>

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
