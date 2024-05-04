import SvgKakaoLogo from "@/assets/logo/KakaoLogo";
import Button from "@/components/common/button/Button";
import { useNavigate } from "react-router-dom";

type Props = {
  icon?: "chevronLeft" | "x";
};

const Previous = ({ icon = "chevronLeft" }: Props) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="empty"
      iconOnly
      Icon={<SvgKakaoLogo />}
      onClick={() => navigate(-1)}
      className="!p-0"
    />
  );
};

export default Previous;
