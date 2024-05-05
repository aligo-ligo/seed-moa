import Header from "@/components/common/header/Header";
import { Typography } from "@/components/common/typography/Typography";
import IMAGE_MAP from "@/constants/image";

const Mypage = () => {
  return (
    <div className="relative flex flex-col px-6 h-dvh">
      <Header>
        <Header.Previous />
      </Header>
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={IMAGE_MAP.mainOliImage}
          alt="기능 개발중 이미지"
          className="w-28"
        />
        <Typography type="heading1" className="text-white font-jalnan">
          마이페이지 업데이트 예정
        </Typography>
        <Typography type="heading1" className="text-white font-jalnan">
          Comming soon
        </Typography>
      </div>
    </div>
  );
};

export default Mypage;
