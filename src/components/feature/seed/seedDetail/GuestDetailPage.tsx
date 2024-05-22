import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, useBeforeUnload, useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import Profile from '@/assets/icon/Profile';
import SunIcon from '@/assets/icon/SunIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';
import STORAGE_KEYS from '@/constants/storageKeys';
import { useCheerContext } from '@/context/CheerContext';
import useCheerMutation from '@/hooks/like/useCheerMutation';
import useToast from '@/hooks/useToast';
import useMusicStore from '@/store/useMusicStore';
import SunBackground from '../../detail/background/SunBackGround';
import CommonSeedDetailBody from './CommonSeedDetailBody';

const GuestDetailPage = () => {
  const { id } = useParams();
  const { data: seed } = useSuspenseQuery(seedOptions.detailTargetWithoutAuth(Number(id)));
  const toggleMusicPlaying = useMusicStore((s) => s.toggleSunPlaying);
  const isPlaying = useMusicStore((s) => s.isSunPlaying);
  const isMember = !!localStorage.getItem(STORAGE_KEYS.accessToken);
  const { isSunOpen, onSunBgOpen, onSunBgClose } = useCheerContext();
  const { likes } = useCheerMutation(Number(id));
  const toast = useToast();

  useBeforeUnload(() => {
    if (!isPlaying) return;
    toggleMusicPlaying();
    onSunBgClose();
  });

  const onClickHandler = async () => {
    if (isPlaying) return;
    try {
      await likes();
      toggleMusicPlaying();
      onSunBgOpen();
      setTimeout(() => {
        toggleMusicPlaying();
        onSunBgClose();
      }, 5000);

      console.log(id);
    } catch {
      toast({ type: 'default', message: '로그인 후 응원할 수 있어요' });
    }
  };

  return (
    <>
      <Header>
        <Header.Logo />
        <Link to={isMember ? '/mypage' : '/'}>
          <Profile width={32} />
        </Link>
      </Header>

      <CommonSeedDetailBody seed={seed} />
      <div className="absolute bottom-5 text-xl w-full text-white">
        <div className="flex flex-col justify-center items-center ">
          <Typography type="heading3">친구의 씨앗 응원하기</Typography>
          <div className="flex size-[60px] justify-center gap-3 mt-3">
            <Button
              width="full"
              onClick={onClickHandler}
              Icon={<SunIcon width={60} height={60} />}
              iconOnly
              className="rounded-[100%] bg-gray-10"
            />
          </div>
        </div>
      </div>

      <SunBackground isOpen={isSunOpen} />
    </>
  );
};

export default GuestDetailPage;
