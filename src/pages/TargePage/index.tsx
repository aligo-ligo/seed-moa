import Button from "@/components/common/button/Button";
import { Typography } from "@/components/common/typography/Typography";
import Header from "@/components/target/Header";
import TargetList from "@/components/target/TargetList";
import CreateToast from "@/components/toast/CreateToast";
import { ROUTER_PATHS } from "@/constants/routerPath";
import { Suspense } from "react";

import { FiBook } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const TargetPage = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("userNickName");

  return (
    <div className="relative flex flex-col px-6 pb-10 h-screen no-scrollbar scroll-smooth">
      <Suspense fallback={<></>}>
        <Header name={name} />
      </Suspense>
      <div className="flex-1 flex flex-col mt-10">
        <h1 className="pointer-events-none mb-8">
          <Typography type="heading1"> {name} 목표록</Typography>
        </h1>
        <TargetList />
      </div>
      <div className="sticky bottom-5 z-20 flex flex-col items-end pr-3xs">
        <>
          <Button
            onClick={() => navigate(ROUTER_PATHS.CREATE_TARGET)}
            variant="accent"
            Icon={<FiBook />}
            iconOnly
            className="size-[56px] w-xl rounded-[100%] bg-primary-800"
          />
        </>
      </div>
      <CreateToast />
    </div>
  );
};

export default TargetPage;
