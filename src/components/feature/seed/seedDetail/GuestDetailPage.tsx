import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import Profile from '@/assets/icon/Profile';
import Header from '@/components/common/header/Header';
import CommonSeedDetailBody from './CommonSeedDetailBody';

const GuestDetailPage = () => {
  const { id } = useParams();
  const { data: seed } = useSuspenseQuery(seedOptions.detailTargetWithoutAuth(Number(id)));

  return (
    <>
      <Header>
        <Header.Logo />
        <Link to={'/'}>
          <Profile width={32} />
        </Link>
      </Header>

      <CommonSeedDetailBody seed={seed} />
    </>
  );
};

export default GuestDetailPage;
