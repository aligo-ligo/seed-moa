import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import { InferType } from 'yup';

import ChevronLeft from '@/assets/icon/ChevronLeft';
import Duration from '@/components/feature/create/Duration';
import ProgressBar from '@/components/feature/create/ProgressBar';
import Seed from '@/components/feature/create/Seed';
import { FUNNEL_LIST, seedSchema } from '@/constants/contants';
import useFunnel from '@/hooks/seed/create/useFunnel';
import Routine from '../components/feature/create/Routine';

export type SeedValidationInferType = InferType<typeof seedSchema>;

const SeedCreatePage = () => {
  const { step, toNext, toPrev } = useFunnel(FUNNEL_LIST);

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
      <Helmet>
        <title>목표와 루틴 그리고 기간을 설정하여 씨앗을 심어주세요</title>
        <meta
          name="description"
          content="씨앗을 심기 위해 목표와 루틴 그리고 기간을 설정해주세요"
        />
        {/* Open Graph */}
        <meta property="og:title" content="씨앗모아" />
        <meta property="og:description" content="심는대로 가두길 응원해요!" />
        <meta property="og:image" content="/ogImage.png" />
        <meta property="og:url" content="https://www.seedmooa.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <FormProvider {...methods}>
        <section className="relative w-full h-dvh">
          <header className="h-[68px] flex w-full items-center justify-between" onClick={toPrev}>
            <ChevronLeft width={20} height={20} color="white" />
          </header>
          <ProgressBar step={step} />
          {step === 'seed' && <Seed toNext={toNext} />}
          {step === 'routines' && <Routine toNext={toNext} />}
          {step === 'duration' && <Duration />}
        </section>
      </FormProvider>
    </div>
  );
};

export default SeedCreatePage;
