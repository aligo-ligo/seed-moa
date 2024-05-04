import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Goal from "../components/goal/Goal";
import Step from "../components/goal/Step";

import useToastList from "../hooks/useToastList";

import ChevronLeft from "@/assets/icon/ChevronLeft";
import Duration from "@/components/goal/Duration";
import ProgressBar from "@/components/target/animationBars/CreateBar";
import { steps } from "@/constants/step";
import { TargetInfoType } from "@/types/target/type";
import { TargetStepType } from "@/types/TargetTypes";
import Routine from "../components/goal/Routine";
import GobackToast from "../components/toast/GobackToast";
import useCreateTarget from "../hooks/api/target/useCreateTarget";

const targetSchema: yup.ObjectSchema<any> = yup.object({
  goal: yup.string().required("열매를 맺을 씨앗(목표)을/를 입력해주세요"),
  routine: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      value: yup.string().required("루틴은 필수예요"),
    })
  ),
  endDate: yup.string().required("목표 달성일을 지정해주세요"),
});

const TargetCreate = () => {
  const { show } = useToastList();
  const { mutate: createTarget } = useCreateTarget();
  const navigate = useNavigate();

  // const [step, setStep] = useState<T[number]>(steps[0]);

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

  const methods = useForm<TargetInfoType>({
    defaultValues: {
      subGoal: [{}, {}],
      routine: [{}, {}],
    },
    resolver: yupResolver(targetSchema),
  });

  const onSubmitHandler = (data: TargetInfoType) => {
    createTarget(data, {
      onSuccess: (res) => {
        console.log("res", res);
        show("createToast");
        navigate("/target");
      },
      //TODO
      //onError : () => {}
    });
  };

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6">
      <FormProvider {...methods}>
        <div
          className="h-[68px] flex w-full items-center justify-between backdrop-blur-sm"
          onClick={toPrev}
          role="presentation"
        >
          <ChevronLeft width={20} height={20} color="white" />
        </div>
        <ProgressBar step={step} />
        <Step check={step === "goal"}>
          <Goal toNext={toNext} />
        </Step>
        <Step check={step === "routine"}>
          <Routine toNext={toNext} />
        </Step>
        <Step check={step === "duration"}>
          <Duration toNext={toNext} />
        </Step>
      </FormProvider>
      <GobackToast />
    </div>
  );
};

export default TargetCreate;
