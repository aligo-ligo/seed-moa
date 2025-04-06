import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

import Add from '@/assets/icon/Add';
import Profile from '@/assets/icon/Profile';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';
import SeedPageBody from '@/components/feature/seed/SeedPageBody';
import { ROUTER_PATHS } from '@/constants/routerPath';

const SeedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col px-6 pb-10 h-dvh no-scrollbar scroll-smooth overflow-y-auto">
      <Helmet>
        <title>땅에 씨앗을 심고 열매를 맺어봐요</title>
        <meta
          name="description"
          content="씨앗 모아. 심는대로 거두는 놀라운 경험을. 28명의 사용자가 총 35개의 씨앗을 심었어요. 동참해보세요"
        />
        {/* Open Graph */}
        <meta property="og:title" content="씨앗모아" />
        <meta property="og:description" content="심는대로 가두길 응원해요!" />
        <meta property="og:image" content="/ogImage.png" />
        <meta property="og:url" content="https://www.seedmooa.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header>
        <Header.Logo />
        <Link to={'/mypage'}>
          <Button Icon={<Profile width={32} />} className="bg-transparent">
            <p className="sr-only">마이페이지</p>
          </Button>
        </Link>
      </Header>
      <div className="flex-1">
        <h1 className="pointer-events-none mb-8 text-white">
          <Typography type="heading1">{`땅에 씨앗을 심고 \n 열매를 맺어봐요.`}</Typography>
        </h1>
        <Suspense fallback={<></>}>
          <SeedPageBody />
        </Suspense>
      </div>
      <div className="sticky bottom-5 z-20 flex flex-col items-end pr-3xs">
        <Button
          onClick={() => navigate(ROUTER_PATHS.CREATE_TARGET)}
          value="씨앗생성버튼"
          variant="accent"
          Icon={<Add width={20} height={20} />}
          iconOnly
          aria-label="씨앗생성버튼"
          className="size-[56px] w-xl rounded-[100%] bg-main hover:scale-[95%] transition duration-200 hover:bg-primary-200"
        />
      </div>
    </div>
  );
};

export default SeedPage;
