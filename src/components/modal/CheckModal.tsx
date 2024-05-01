import StyledButton from "../common/StyledButton";

import targetAPI from "@/api/target/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSubGoalStore } from "../../store/store";

type Props = {
  closeModal: () => void;
  targetId: string | undefined;
};

export type postSubgoalType = {
  targetId: number;
  value: string;
  completeDate: string | null;
};

const CheckModal = ({ closeModal, targetId }: Props) => {
  const { subGoalValue, CheckedDate } = useSubGoalStore();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: targetAPI.postSubGoalStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["target", targetId] });
    },
  });

  const currentDate = new Date().toString();
  const data = {
    targetId: Number(targetId),
    value: subGoalValue,
    completeDate: CheckedDate === null ? currentDate : null,
  };
  const handleClick = () => {
    mutate(data);
    closeModal();
  };

  return (
    <div className="bg-white rounded-md">
      <h1 className="font-semibold text-xl mb-5"> 체크 포인트 최종 확인 </h1>
      {CheckedDate === null ? (
        <>
          <p className="font-light text-sm">
            매일 루틴을 이행하여 해당 세분화 목표를 달성하셨나요?
          </p>
          <br />
          <p className="font-light text-sm">{`체크 포인트는 ${subGoalValue} 예요`}</p>
          <br />
          <p className="font-bold text-sm">{`'네' 를 누르시면 체크됩니다!`}</p>
        </>
      ) : (
        <>
          <p className="font-light text-sm">{`해당 체크포인트인 ${subGoalValue} 을/를 취소하시나요?`}</p>
          <br />
          <p className="font-bold text-sm">{`'네' 를 누르시면 취소됩니다!`}</p>
        </>
      )}

      <div className="flex justify-center gap-4 p-4 ">
        <StyledButton
          styleName="sharingExit"
          type="button"
          onClick={handleClick}
        >
          네
        </StyledButton>
        <StyledButton
          styleName="sharingExit"
          type="button"
          onClick={closeModal}
        >
          아니요
        </StyledButton>
      </div>
    </div>
  );
};

export default CheckModal;
