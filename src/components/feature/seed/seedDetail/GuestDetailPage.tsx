import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import Profile from '@/assets/icon/Profile';
import SunIcon from '@/assets/icon/SunIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';
import STORAGE_KEYS from '@/constants/storageKeys';
import useMusicStore from '@/store/useMusicStore';
import CommonSeedDetailBody from './CommonSeedDetailBody';

const GuestDetailPage = () => {
  const { id } = useParams();
  const { data: seed } = useSuspenseQuery(seedOptions.detailTargetWithoutAuth(Number(id)));
  const toggleMusicPlaying = useMusicStore((s) => s.toggleSunPlaying);
  const isMember = !!localStorage.getItem(STORAGE_KEYS.accessToken);

  const clickHandler = () => {
    toggleMusicPlaying();
  };

  //TODO: 누구누구의 씨앗이라는 것을 말해주면 좋겠다
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
              onClick={clickHandler}
              Icon={<SunIcon width={60} height={60} />}
              iconOnly
              className="rounded-[100%] bg-gray-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestDetailPage;
