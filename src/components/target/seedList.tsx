import { PreviewSeedType } from '@/types/target/type';
import SeedCard from '../feature/seed/SeedCard';
import SeedEmptyCard from './SeedEmptyCard';

const SeedList = ({ seeds, isActive }: { seeds: PreviewSeedType[]; isActive: boolean }) => {
  console.log('seeds', seeds);
  return (
    <ul className="flex flex-col gap-6 h-48">
      {seeds?.length === 0 ? (
        <SeedEmptyCard isActive={isActive} />
      ) : (
        <>
          {seeds.map((seed) => {
            return <SeedCard key={seed.id} {...seed} />;
          })}
        </>
      )}
    </ul>
  );
};

export default SeedList;
