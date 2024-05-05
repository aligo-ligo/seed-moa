import LogoSVG from "@/assets/logo/Logo";
import { useNavigate } from "react-router-dom";
import { Typography } from "../common/typography/Typography";

const TargetEmptyCard = () => {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col w-full min-h-48 rounded-xl border border-gray-100 p-3 cursor-pointer bg-gray-10"
      onClick={() => navigate(`/target/create`)}
    >
      <div className="flex w-full h-full py-2">
        <div className="flex flex-col justify-center items-center w-[50%]">
          <LogoSVG width={80} height={80} className="ml-1" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-evenly ">
          <Typography type="heading2">씨앗 생성하기</Typography>
        </div>
      </div>
    </li>
  );
};

export default TargetEmptyCard;
