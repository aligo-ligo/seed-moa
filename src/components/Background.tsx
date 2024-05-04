import React from "react";

interface BackgroundProps extends React.ComponentPropsWithoutRef<"div"> {
  imageUrl: string;
  children: React.ReactNode;
}
const Background = ({ imageUrl, children }: BackgroundProps) => {
  //TODO : 상위 컴포넌트로 주입하여 상대경로로 배경 구현하기
  //TODO : 데스크탑 이미지 해상도 문제 해결 필요
  console.log("imageUrl", imageUrl);

  return (
    <div
      className={` bg-[url('public/background.png')] bg-no-repeat bg-cover bg-center bg-fixed`}
    >
      {children}
    </div>
  );
};

export default Background;
