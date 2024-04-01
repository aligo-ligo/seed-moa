import StyledButton from "../common/StyledButton";

import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { TARGET_KEY } from "../../constant/queryKeyConstants";
import usePostSubGoal from "../../hooks/api/subGoal/usePostSubGoalById";
import { useSubGoalStore } from "../../store/store";
import { PostSubGoalType } from "../../types/TargetTypes";

type Props = {
  closeModal: () => void;
  targetId: string | undefined;
};

const CheckModal = ({ closeModal, targetId }: Props) => {
  // const { subGoalValue, isSubGoalComplete } = useContext(CheckModalContext);
  const { subGoalValue, CheckedDate } = useSubGoalStore();

  const data =
    CheckedDate === null
      ? {
          id: targetId,
          value: subGoalValue,
          completeDate: new Date().toString(),
        }
      : {
          id: targetId,
          value: subGoalValue,
          completeDate: null,
        };

  const postMutation = usePostMutation(targetId, data);

  const handleClick = () => {
    postMutation.mutate();
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

const usePostMutation = (
  id: string | undefined,
  request: PostSubGoalType,
  options?: UseMutationOptions<void, unknown, void>
) => {
  const queryClient = useQueryClient();
  const postSubgoal = usePostSubGoal();

  const mutation = useMutation(
    () => {
      return postSubgoal(request);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([TARGET_KEY, id]);
      },
      ...options,
    }
  );

  return mutation;
};
