import { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";

import Add from "@/assets/icon/Plus";
import Profile from "@/assets/icon/Profile";
import Button from "@/components/common/button/Button";
import Header from "@/components/common/header/Header";
import { Typography } from "@/components/common/typography/Typography";
import TargetList from "@/components/target/TargetList";
import CreateToast from "@/components/toast/CreateToast";
import { ROUTER_PATHS } from "@/constants/routerPath";

const TargetPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col px-6 pb-10 h-dvh no-scrollbar scroll-smooth overflow-y-auto">
      <Suspense fallback={<></>}>
        <Header>
          <Header.Logo />
          <Link to={"/mypage"}>
            <Profile width={32} />
          </Link>
        </Header>
      </Suspense>
      <div className="flex-1 flex flex-col">
        <h1 className="pointer-events-none mb-8 text-white">
          <Typography type="heading1">땅에 씨앗을 심고</Typography>
          <Typography type="heading1">열매를 맺어봐요</Typography>
        </h1>
        <TargetList />
      </div>
      <div className="sticky bottom-5 z-20 flex flex-col items-end pr-3xs">
        <Button
          onClick={() => navigate(ROUTER_PATHS.CREATE_TARGET)}
          variant="accent"
          Icon={<Add />}
          iconOnly
          className="size-[56px] w-xl rounded-[100%] bg-main"
        />
      </div>
      <CreateToast />
    </div>
  );
};

export default TargetPage;
