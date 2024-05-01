import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import ModalContent from "../components/common/ModalContent";
import StyledButton from "../components/common/StyledButton";
import Header from "../components/target/Header";
import usePopUp from "../hooks/usePopUp";

import targetOptions from "@/api/target/queryOptions";
import SkeletonElement from "@/components/layout/Skeleton";
import ProgressBar from "@/components/target/animationBars/ProgressBar";
import Checkbox from "@/components/target/Checkbox";
import CustomLineChart from "@/components/target/LineGraph";
import RoutineBox from "@/components/target/RoutineBox";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { useQuery } from "@tanstack/react-query";
import Meta from "../components/common/Meta";

const TargetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: target,
    status,
    isLoading,
  } = useQuery(targetOptions.detailTarget(Number(id)));
  const name = localStorage.getItem("userNickName");

  console.log("target", target);

  const {
    isModalOpen,
    openModal,
    closeModal,
    outside,
    buttonModalType,
    changeModalType,
  } = usePopUp();

  const votePercentage = calculatePercentage(
    target?.successVote,
    target?.voteTotal
  );

  return (
    <div className="relative flex flex-col min-h-screen px-6 mb-10">
      <Header name={name} />
      {name && id && <Meta name={name} id={id} />}

      <div>
        <h1 className="font-semibold text-3xl text-center pointer-events-none">
          {target?.goal}
        </h1>
        {status === "success" && (
          <div className="flex flex-col gap-6 mt-10">
            <div>
              <div className="flex justify-between">
                <p className="font-semibold text-xl pointer-events-none">
                  성취 그래프
                </p>
              </div>
              <CustomLineChart
                start={target.startDate}
                end={target?.endDate}
                achieveDay={target?.achievementDate}
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl">체크 포인트</h2>
              {isLoading && (
                <>
                  <SkeletonElement type="title" />
                  <SkeletonElement type="title" />
                </>
              )}

              {target.subGoal.map((subGoal, index) => {
                return (
                  <Checkbox
                    type="detail"
                    key={index}
                    value={subGoal.value}
                    completedDate={subGoal.completedDate}
                  >
                    {subGoal.value}
                  </Checkbox>
                );
              })}
            </div>
            <div>
              <h2 className="font-semibold text-xl">루틴</h2>
              {isLoading && (
                <>
                  <SkeletonElement type="title" />
                  <SkeletonElement type="title" />
                </>
              )}
              {target?.routine.map((routine, index) => {
                return (
                  <RoutineBox key={index} id={index}>
                    {routine.value}
                  </RoutineBox>
                );
              })}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl mb-8">성공 예측률 투표</h2>
                <p className="text-xs font-bold">{`${
                  target?.voteTotal || 0
                }명 참여했어요`}</p>
              </div>
              <ProgressBar completed={votePercentage} />
            </div>
          </div>
        )}

        <div className="flex flex-col item-center justify-center gap-4 m-20">
          <StyledButton
            styleName="sharing"
            type="button"
            onClick={() => {
              openModal();
              changeModalType("sharing");
            }}
          >
            공유
          </StyledButton>

          <StyledButton
            styleName="result"
            type="button"
            onClick={() => {
              navigate(`/result/${id}`);
            }}
          >
            결과 페이지로 이동하기
          </StyledButton>
        </div>
        {isModalOpen &&
          createPortal(
            <ModalContent
              targetId={id}
              buttonModalType={buttonModalType}
              outside={outside}
              closeModal={closeModal}
            />,
            document.body
          )}
      </div>
    </div>
  );
};

export default TargetDetail;
