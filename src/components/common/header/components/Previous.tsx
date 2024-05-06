import ChevronLeft from "@/assets/icon/ChevronLeft";
import Button from "@/components/common/button/Button";
import { useNavigate } from "react-router-dom";

const Previous = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="empty"
      iconOnly
      Icon={<ChevronLeft width={20} height={20} color="white" />}
      onClick={() => navigate(-1)}
    />
  );
};

export default Previous;
