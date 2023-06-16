import { useState } from "react";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";

const TargetCreate = () => {
	const [registerData, setRegisterData] = useState();
	const [step, setStep] = useState<
		"goal" | "subGoal" | "duration" | "lastStep"
	>("goal");
	console.log(step);
	return (
		<div className="flex flex-col items-center h-screen px-6 pb-10">
			<Step if={step === "goal"}>
				<Goal />
			</Step>
			TargetCreate
		</div>
	);
};

export default TargetCreate;
