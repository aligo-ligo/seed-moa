import { Suspense } from 'react';

import { PreviewSeedType } from '@/types/target/type';
import { Spinner } from '../common/spinner/Spinner';
import SeedCard from './\bseedCard';
import TargetEmptyCard from './TargetEmptyCard';

const SeedList = ({ seeds }: { seeds: PreviewSeedType[] }) => {
  return (
    <ul className="flex flex-col gap-6 h-fit">
      <Suspense fallback={<Spinner />}>
        {seeds?.length === 0 ? (
          <TargetEmptyCard />
        ) : (
          <>
            {seeds.map((seed) => {
              return <SeedCard key={seed.id} {...seed} />;
            })}
          </>
        )}
      </Suspense>
    </ul>
  );
};

export default SeedList;
