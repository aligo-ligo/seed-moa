import Header from "../components/target/Header";

import IMAGE_MAP from "@/constants/image";

const QuestionPage = () => {
  const userNickName = localStorage.getItem("userNickName");

  return (
    <div className="relative  px-6 min-h-screen ">
      <Header name={userNickName} />
      <div className="flex flex-col items-center justify-center mt-24">
        <img
          src={IMAGE_MAP.mainOliImage}
          alt="기능 개발중 이미지"
          className="w-28"
        />
        <div className="text-xl font-bold">사용 방법 노하우 업데이트 예정</div>

        <p className="text-xl font-bold">coming soon</p>
      </div>
    </div>
  );
};

export default QuestionPage;
