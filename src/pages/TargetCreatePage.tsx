import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InferType } from 'yup';

import ChevronLeft from '@/assets/icon/ChevronLeft';
import Duration from '@/components/goal/Duration';
import Seed from '@/components/goal/Seed';
import ProgressBar from '@/components/target/animationBars/ProgressBar';
import { seedSchema } from '@/constants/contants';
import { steps } from '@/constants/step';
import { TargetStepType } from '@/types/TargetTypes';
import Routine from '../components/goal/Routine';
import Step from '../components/goal/Step';

// 1.유효성 검사 버튼 트리거 되도록
// 1. 유효성 yup 타입
// 1. 달력 3일부터 30일까지만 색 보이도록 구현

export type SeedValidationInferType = InferType<typeof seedSchema>;

const TargetCreatePage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<TargetStepType[number]>(steps[0]);
  const currentIdx = steps.indexOf(step);

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < steps.length - 1;

  const toPrev = useCallback(() => {
    if (!hasPrev) {
      navigate(-1);
    }
    setStep(steps[currentIdx - 1]);
  }, [currentIdx, hasPrev, navigate]);

  const toNext = useCallback(() => {
    if (!hasNext) {
      return;
    }

    setStep(steps[currentIdx + 1]);
  }, [currentIdx, hasNext]);

  const methods = useForm<SeedValidationInferType>({
    defaultValues: {
      seed: '',
      routines: [{ value: '' }],
      endDate: '',
    },
    resolver: yupResolver(seedSchema),
  });

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6">
      <FormProvider {...methods}>
        <section className="relative w-full h-dvh">
          <header className="h-[68px] flex w-full items-center justify-between" onClick={toPrev}>
            <ChevronLeft width={20} height={20} color="white" />
          </header>
          <ProgressBar step={step} />
          <Step check={step === 'seed'}>
            <Seed toNext={toNext} />
          </Step>
          <Step check={step === 'routines'}>
            <Routine toNext={toNext} />
          </Step>
          <Step check={step === 'duration'}>
            <Duration />
          </Step>
        </section>
      </FormProvider>
    </div>
  );
};

export default TargetCreatePage;