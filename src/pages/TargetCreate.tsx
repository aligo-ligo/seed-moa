import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";
import LastStep from "../components/goal/LastStep";
import Duration from "../components/goal/Duration";
import SubGoalRoutine from "../components/goal/SubGoalRoutine";

const TargetCreate = () => {
	const [registerData, setRegisterData] = useState();
	const [step, setStep] = useState<
		"goal" | "subGoal" | "duration" | "lastStep"
	>("goal");
	const methods = useForm({
		defaultValues: {
			subGoal: [{ name: "subGoal" }, { name: "subGoal" }, { name: "subGoal" }],
			routine: [{ name: "routine" }],
		},
	});

	console.log("ss", step);

	return (
		<div className="flex flex-col items-center h-screen px-6 pb-10">
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
					<Step check={step === "lastStep"}>
						<LastStep setStep={setStep} />
					</Step>
				</form>
			</FormProvider>
		</div>
	);
};

export default TargetCreate;
