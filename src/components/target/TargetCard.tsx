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

  return (
    <li
      className="flex flex-col items-center justify-between w-full min-h-48 rounded-xl border border-gray-100 p-3 cursor-pointer bg-gray-10"
      onClick={() => navigate(`/target/${id}`)}
    >
      {/* CARD HEADER */}
      <div className="w-full flex justify-between">
        <Tag>진행중</Tag>
        <Typography type="section1" className="text-gray-500">
          {fromNowOf(dayjs("2024-05-26").endOf("day"))}
        </Typography>
      </div>

      <Typography
        type="heading2"
        className="w-full overflow-hidden whitespace-nowrap truncate"
      >
        {goal}
      </Typography>
      <div className="flex w-full gap-4">123123</div>
    </li>
  );
};

export default TargetCard;
