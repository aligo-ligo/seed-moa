import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";
import LastStep from "../components/goal/LastStep";
import Duration from "../components/goal/Duration";
import SubGoalRoutine from "../components/goal/SubGoalRoutine";
import Penalty from "../components/goal/Penalty";
import { TargetInfoType, TargetStepType } from "../types/TargetType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const targetSchema: yup.ObjectSchema<TargetInfoType> = yup.object({
	goal: yup.string().required(),
	// nickName: yup.string().default("").nullable(),
	// sex: yup
	// 	.mixed()
	// 	.oneOf(["male", "female"] as const)
	// 	.defined(),
	// birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),
});

const TargetCreate = () => {
	const [registerData, setRegisterData] = useState();
	const [step, setStep] = useState<TargetStepType>("goal");
	const methods = useForm({
		defaultValues: {
			subGoal: [{ name: "subGoal" }, { name: "subGoal" }, { name: "subGoal" }],
			routine: [{ name: "routine" }],
		},
		resolver: yupResolver(targetSchema),
	});

	console.log("최상위", methods.formState.errors);

	return (
		<div className=" flex flex-col items-center h-screen px-6 pb-10 ">
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) =>
						console.log("최종 제출", data)
					)}
					className="w-full"
				>
					<Step check={step === "goal"}>
						<Goal setStep={setStep} />
					</Step>
					<Step check={step === "subGoal"}>
						<SubGoalRoutine setStep={setStep} />
					</Step>
					<Step check={step === "duration"}>
						<Duration setStep={setStep} />
					</Step>
					<Step check={step === "penalty"}>
						<Penalty setStep={setStep} />
					</Step>
					<Step check={step === "lastStep"}>
						<LastStep setStep={setStep} />
					</Step>
				</form>
			</FormProvider>
		</div>
	);
};

export default TargetCreate;
