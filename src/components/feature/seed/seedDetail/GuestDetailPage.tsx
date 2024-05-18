import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import Profile from '@/assets/icon/Profile';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';

const GuestDetailPage = () => {
  const { id } = useParams();
  const { data: seed, isLoading } = useQuery(seedOptions.detailTargetWithoutAuth(Number(id)));

  console.log(seed, isLoading);
  return (
    <>
      <Header>
        <Header.Logo />
        <Link to={'/'}>
          <Profile width={32} />
        </Link>
      </Header>
      <Typography className="font-jalnan text-gray-10">API 기다리는 중</Typography>
    </>
  );
};

export default GuestDetailPage;
