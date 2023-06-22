import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";
import LastStep from "../components/goal/LastStep";
import Duration from "../components/goal/Duration";
import SubGoalRoutine from "../components/goal/SubGoalRoutine";
import Penalty from "../components/goal/Penalty";
import { TargetStepType } from "../types/TargetType";
import { validationSchema } from "../utils/contants";
import useYupValidationResolver from "../hooks/useYupValidationResolver";

const TargetCreate = () => {
	const [registerData, setRegisterData] = useState();
	const [step, setStep] = useState<TargetStepType>("goal");
	const resolver = useYupValidationResolver(validationSchema);
	const methods = useForm({
		defaultValues: {
			subGoal: [{ name: "subGoal" }, { name: "subGoal" }, { name: "subGoal" }],
			routine: [{ name: "routine" }],
		},
		resolver,
	});

	console.log("ss", step);

	console.log("s", methods.formState.errors);

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
