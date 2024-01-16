import { post } from "../../../libs/api";
import { PostSubGoalType } from "../../../types/TargetTypes";

const usePostSubGoal = () => {
  const postSubGoal = async (request: PostSubGoalType) => {
    await post("/target/update", request);
  };

  return postSubGoal;
};

export default usePostSubGoal;
