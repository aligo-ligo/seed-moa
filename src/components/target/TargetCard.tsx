import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import FruitsStage from '@/assets/icon/FruitsStage';
import SeedStage from '@/assets/icon/SeedStage';
import StemStage from '@/assets/icon/StemStage';
import TreeStage from '@/assets/icon/TreeStage';
import { PreviewSeedType } from '@/types/target/type';
import { fromNowOf } from '@/utils/fromNowOf';
import { Tag } from '../common/tag';
import { Typography } from '../common/typography/Typography';

const TargetCard = ({ id, seed, seedState, endDate, routineInfos }: PreviewSeedType) => {
  const navigate = useNavigate();

  //TODO : startDate으로 정렬 구현!
  //TODO : TargetCard 컴포넌트 컴파운드로 추후 리팩터링
  return (
    <li
      className="flex flex-col w-full min-h-48 rounded-xl border border-gray-100 p-3 cursor-pointer bg-gray-10"
      onClick={() => navigate(`/target/${id}`)}
    >
      {/* CARD HEADER */}
      <div className="w-full flex justify-between">
        <Tag>{dayjs(endDate).isAfter() ? '진행중' : '종료'}</Tag>
        <Typography type="section1" className="text-gray-500">
          {fromNowOf(dayjs(endDate).endOf('day'))}
        </Typography>
      </div>

      {/* CARD BODY */}
      <div className="flex w-full h-full py-2">
        <div className="flex flex-col justify-evenly w-[70%]">
          <Typography type="heading2" className="overflow-hidden whitespace-nowrap truncate">
            {seed}
          </Typography>
          <div>
            {routineInfos.map((routine, index) => {
              return (
                <Typography
                  type="section1"
                  className="text-gray-700 overflow-hidden whitespace-nowrap truncate"
                  key={index}
                >
                  {routine.value}
                </Typography>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-evenly ">
          <div className="w-16">{seedStateObj[seedState]}</div>
        </div>
      </div>
      {/* CARD FOOTER */}
    </li>
  );
};

export default TargetCard;

export const seedStateObj: Record<string, JSX.Element> = {
  SEED: <SeedStage />,
  STEM: <StemStage />,
  TREE: <TreeStage />,
  FRUITS: <FruitsStage />,
};
