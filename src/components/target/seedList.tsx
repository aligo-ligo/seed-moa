import { PreviewSeedType } from '@/types/target/type';
import { checkActiveDuration } from '@/utils/date';
import SeedCard from './\bseedCard';
import TargetEmptyCard from './TargetEmptyCard';

// TODO : isEndDUration은 확장성을 고려하여 boolean보다 Constant Literal이 좋을 듯
const SeedList = ({ isActive, seeds }: { isActive: boolean; seeds: PreviewSeedType[] }) => {
  return (
    <ul className="flex flex-col gap-6">
      {seeds?.length === 0 ? (
        <TargetEmptyCard />
      ) : (
        <>
          {seeds.map((seed) => {
            const activeState = checkActiveDuration(seed.endDate);
            return activeState === isActive ? <SeedCard key={seed.id} {...seed} /> : null;
          })}
        </>
      )}
    </ul>
  );
};

export default SeedList;
