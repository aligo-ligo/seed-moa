import { useNavigate } from "react-router-dom";
import { Typography } from "../common/typography/Typography";
import ProgressBarWithLabel from "./animationBars/ProgressBarWithLabel";

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
      className="flex flex-col items-center justify-between w-full h-48 rounded-xl border border-gray-100 p-4 cursor-pointer bg-gray-10"
      onClick={() => navigate(`/target/${id}`)}
    >
      <Typography
        type="heading2"
        className="w-full overflow-hidden whitespace-nowrap truncate"
      >
        {goal}
      </Typography>
      <div className="flex w-full gap-4">
        <ProgressBarWithLabel value={achievementPer}>
          성취율
        </ProgressBarWithLabel>
        <ProgressBarWithLabel value={successRate}>
          성공 예측률
        </ProgressBarWithLabel>
      </div>
    </li>
  );
};

export default TargetCard;
