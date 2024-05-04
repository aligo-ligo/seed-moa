import FruitsStage from "@/assets/icon/FruitsStage";
import SeedStage from "@/assets/icon/SeedStage";
import StemStage from "@/assets/icon/StemStage";
import TreeStage from "@/assets/icon/TreeStage";
import { fromNowOf } from "@/utils/fromNowOf";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Tag } from "../common/tag";
import { Typography } from "../common/typography/Typography";

type TargetCardProps = {
  id: number;
  goal: string;
  achievementPer: number;
  successRate: number;
};

const TargetCard = ({
  id,
  goal,
  successRate,
  achievementPer,
}: TargetCardProps) => {
  const navigate = useNavigate();

  /** width, getStageFromLevel */
  const getStageFromLevel = (width: number, level: number): JSX.Element => {
    const stageList = [
      <SeedStage width={width} />,
      <StemStage width={width} />,
      <TreeStage width={width} />,
      <FruitsStage width={width} />,
    ];
    return stageList[level];
  };

  return (
    <li
      className="flex flex-col w-full min-h-48 rounded-xl border border-gray-100 p-3 cursor-pointer bg-gray-10"
      onClick={() => navigate(`/target/${id}`)}
    >
      {/* CARD HEADER */}
      <div className="w-full flex justify-between">
        <Tag>진행중</Tag>
        <Typography type="section1" className="text-gray-500">
          {fromNowOf(dayjs("2024-05-26").endOf("day"))}
        </Typography>
      </div>

      <div className="flex w-full h-full py-2">
        <div className="flex flex-col justify-evenly w-[70%]">
          <Typography
            type="heading2"
            className="overflow-hidden whitespace-nowrap truncate"
          >
            {goal}
          </Typography>
          <div>
            <Typography
              type="section1"
              className="text-gray-700 overflow-hidden whitespace-nowrap truncate"
            >
              루틴입니다
            </Typography>
            <Typography
              type="section1"
              className="text-gray-700 overflow-hidden whitespace-nowrap truncate"
            >
              루틴입니다aefaefaefae
            </Typography>
            <Typography
              type="section1"
              className="text-gray-700 overflow-hidden whitespace-nowrap truncate"
            >
              루틴입니다awefaefaefafawfeae
            </Typography>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-evenly ">
          {getStageFromLevel(80, 1)}
        </div>
      </div>
    </li>
  );
};

export default TargetCard;
