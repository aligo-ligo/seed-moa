import { Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Add from '@/assets/icon/Add';
import Profile from '@/assets/icon/Profile';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import SeedPageBody from '@/components/feature/seed/SeedPageBody';
import { ROUTER_PATHS } from '@/constants/routerPath';

const SeedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col px-6 pb-10 h-dvh no-scrollbar scroll-smooth overflow-y-auto">
      <Suspense fallback={<></>}>
        <Header>
          <Header.Logo />
          <Link to={'/mypage'}>
            <Profile width={32} />
          </Link>
        </Header>
      </Suspense>
      <SeedPageBody />
      <div className="sticky bottom-5 z-20 flex flex-col items-end pr-3xs">
        <Button
          onClick={() => navigate(ROUTER_PATHS.CREATE_TARGET)}
          variant="accent"
          Icon={<Add width={20} height={20} />}
          iconOnly
          className="size-[56px] w-xl rounded-[100%] bg-main"
        />
      </div>
    </div>
  );
};

export default SeedPage;
