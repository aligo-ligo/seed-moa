import { useNavigate } from "react-router-dom";
import { Typography } from "../common/typography/Typography";
import ProgressBarWithLabel from "./animationBars/ProgressBarWithLabel";

type TargetCardProps = {
  id: number;
  goal: string;
  achievementPer: number;
  successRate: number;
  userId: number;
};

const TargetCard = ({}: TargetCardProps) => {
  const navigate = useNavigate();
  return (
    <li
      className="flex flex-col items-center justify-between w-full h-48 rounded-xl border-2 border-main p-4 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <Typography
        type="heading2"
        className="w-full overflow-hidden whitespace-nowrap truncate"
      >
        목표
      </Typography>
      <div className="flex w-full gap-4">
        <ProgressBarWithLabel value={150}>성취율</ProgressBarWithLabel>
        <ProgressBarWithLabel value={10}>성공 예측률</ProgressBarWithLabel>
      </div>
    </li>
  );
};

export default TargetCard;
