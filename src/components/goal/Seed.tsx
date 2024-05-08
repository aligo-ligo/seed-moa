import { useFormContext } from 'react-hook-form';

import { GOAL_DESCRIPTION, GOAL_TITLE } from '../../constants/target';
import Validation from '../auth/Validation';
import Button from '../common/button/Button';
import TargetCreateLayout from '../layout/TargetCreateLayout';

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
        className="placeholder:text-s placeholder:text-gray-100 w-full h-10 outline-none text-white border-b border-gray-200 bg-transparent"
        placeholder="씨앗(목표)를 작성해주세요"
        {...register('seed')}
      />
      <Validation>{errors?.seed?.message?.toString()}</Validation>

      <div className="absolute bottom-5 text-xl w-full bg-slate-50 text-white rounded-xl">
        <Button className=" w-full h-16 duration-300" variant="secondary" onClick={toNext}>
          다음
        </Button>
      </div>
    </TargetCreateLayout>
  );
};

export default Seed;
