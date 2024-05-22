import { useState } from 'react';

import RainBackGround from '../../detail/RainBackGround';
import Task from '../../detail/Task';
import { detailSeedStateObj } from '../../seed/SeedCard';

const OnboardingRain = () => {
  const [isRainOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="mt-20 flex justify-center items-center">{detailSeedStateObj.SEED}</div>
      <div className="w-[92%] absolute bottom-20">
        <Task
          routineId={1}
          routineTitle={'루틴을 체크하면 비가 내려요'}
          completedRoutineToday={false}
          onDone={() => {}}
          onRainBgOpen={() => setIsOpen(true)}
          onRainBgClose={() => setIsOpen(false)}
          disableEditing={true}
        />
      </div>
      <RainBackGround isRainOpen={isRainOpen} />
    </section>
  );
};

export default OnboardingRain;
