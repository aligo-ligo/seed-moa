import { useState } from "react";
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
	console.log("ss", step);
	return (
		<div className="flex flex-col items-center h-screen px-6 pb-10">
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
		</div>
	);
};

export default TargetCreate;
