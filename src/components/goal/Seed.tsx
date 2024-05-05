import { GOAL_DESCRIPTION, GOAL_TITLE } from "../../constants/target";
import Validation from "../auth/Validation";
import TargetCreateLayout from "../layout/TargetCreateLayout";

import { useFormContext } from "react-hook-form";
import Button from "../common/button/Button";

type SeedProps = {
  toNext: () => void;
};

const Seed = ({ toNext }: SeedProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TargetCreateLayout title={GOAL_TITLE} description={GOAL_DESCRIPTION}>
      <input
        type="text"
        className="placeholder:text-s placeholder:text-gray-100 w-full h-10 outline-none text-white border-b-2 border-primary-300 bg-transparent"
        placeholder="씨앗(목표)를 작성해주세요"
        {...register("seed")}
      />
      <Validation>{errors?.seed?.message?.toString()}</Validation>

      <div className="absolute bottom-5 w-full">
        <Button onClick={toNext}>다음</Button>
      </div>
    </TargetCreateLayout>
  );
};

export default Seed;
