import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Step from "../components/goal/Step";

import ChevronLeft from "@/assets/icon/ChevronLeft";
import Duration from "@/components/goal/Duration";
import ProgressBar from "@/components/target/animationBars/ProgressBar";
import { steps } from "@/constants/step";

import Seed from "@/components/goal/Seed";
import { SeedResponseType } from "@/types/target/type";
import { TargetStepType } from "@/types/TargetTypes";
import Routine from "../components/goal/Routine";
import GobackToast from "../components/toast/GobackToast";
import useCreateSeedMutation from "../hooks/api/target/useCreateTarget";

const targetSchema: yup.ObjectSchema<any> = yup.object({
  seed: yup.string().required("열매를 맺을 씨앗(목표)을/를 입력해주세요"),
  routines: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      value: yup.string().required("루틴은 필수예요"),
    })
  ),
  endDate: yup.string().required("목표 달성일을 지정해주세요"),
});

const TargetCreate = () => {
  const navigate = useNavigate();
  const { submitSeed } = useCreateSeedMutation();

  const [step, setStep] = useState<TargetStepType[number]>(steps[0]);
  const currentIdx = steps.indexOf(step);

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < steps.length - 1;

  const toPrev = useCallback(() => {
    if (!hasPrev) {
      navigate(-1);
    }
    setStep(steps[currentIdx - 1]);
  }, [currentIdx, hasPrev, steps]);

  const toNext = useCallback(() => {
    if (!hasNext) {
      return;
    }

    setStep(steps[currentIdx + 1]);
  }, [currentIdx, hasNext, steps]);

  const methods = useForm<SeedResponseType>({
    defaultValues: {
      seed: "",
      routines: [{}, {}],
      endDate: "",
    },
    resolver: yupResolver(targetSchema),
  });

  const onSubmitHandler = (data: SeedResponseType) => {
    console.log("data", data);
    submitSeed(data);
  };

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmitHandler)}
          className="relative w-full h-dvh"
        >
          <div
            className="h-[68px] flex w-full items-center justify-between backdrop-blur-sm"
            onClick={toPrev}
            role="presentation"
          >
            <ChevronLeft width={20} height={20} color="white" />
          </div>
          <ProgressBar step={step} />
          <Step check={step === "seed"}>
            <Seed toNext={toNext} />
          </Step>
          <Step check={step === "routines"}>
            <Routine toNext={toNext} />
          </Step>
          <Step check={step === "duration"}>
            <Duration />
          </Step>
        </form>
      </FormProvider>
      <GobackToast />
    </div>
  );
};

export default TargetCreate;
