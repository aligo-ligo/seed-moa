import { Suspense } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Kakaotalk from '@/assets/icon/Kakaotalk';
import LinkIcon from '@/assets/icon/Link';
import Profile from '@/assets/icon/Profile';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Tag } from '@/components/common/tag';
import { ToolTip } from '@/components/common/toolTip';
import { Typography } from '@/components/common/typography/Typography';
import { seedStateObj } from '@/components/target/TargetCard';
import Task from '@/components/Task';

const TargetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { data: target, status, isLoading } = useQuery(targetOptions.detailTarget(Number(id)));
  // const { isModalOpen, openModal, closeModal, outside, buttonModalType, changeModalType } =
  //   usePopUp();
  const count = 1;
  const total = 20;

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6">
      <Suspense fallback={<></>}>
        <Header>
          <Header.Previous />
          <Link to={'/mypage'}>
            <Profile width={32} />
          </Link>
        </Header>
      </Suspense>

      <Typography type="heading1" className="pointer-events-none text-white text-left w-full">
        목표
      </Typography>

      <div className="flex flex-col w-full h-full">
        <div className=" h-[40%] flex flex-col justify-center items-center">
          <div className="relative flex w-full justify-end">
            <Tag className="">{`${count}/${total}`}</Tag>
            <div className="absolute w-full justify-end flex -top-14 -right-3">
              <ToolTip title={`47번만 더!`} />
            </div>
          </div>

          <div className="w-48">{seedStateObj['SEED']}</div>
        </div>
        <div className="flex-1 w-full">
          <Task />
        </div>
      </div>

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
