import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";
import LastStep from "../components/goal/LastStep";
import Duration from "../components/goal/Duration";
import SubGoalRoutine from "../components/goal/SubGoalRoutine";
import Penalty from "../components/goal/Penalty";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { TargetInfoType, TargetStepType } from "../types/TargetTypes";

import { useTarget } from "../hooks/useTarget";

const targetSchema: yup.ObjectSchema<TargetInfoType> = yup.object({
	goal: yup.string().required("목표를 입력해주세요"),
	// subGoal: yup.array().of(
	// 	yup

	// 		.object()
	// 		.shape({
	// 			name: yup.string(),
	// 			value: yup.string().required("세부 목표를 입력해주세요"),
	// 		})
	// 		.required("서브 목표를 최소한 하나 이상 입력해주세요")
	// ),
	endDate: yup.string().required("목표 달성일을 지정해주세요"),
	penalty: yup.string().required("벌칙을 지정해주세요"),

	// nickName: yup.string().default("").nullable(),
	// sex: yup
	// 	.mixed()
	// 	.oneOf(["male", "female"] as const)
	// 	.defined(),
	// birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),
});

const TargetCreate = () => {
	const targetService = useTarget();
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const [step, setStep] = useState<TargetStepType>("goal");

	const methods = useForm({
		defaultValues: {
			subGoal: [{}, {}, {}],
			routine: [{}],
		},
		resolver: yupResolver(targetSchema),
	});
	console.log(message);
	console.log("최상위", methods.formState.errors);
	console.log("in the top", step);

	const onSubmitHandler = (data: TargetInfoType) => {
		console.log("최종", data);
		targetService
			?.postTarget(data)
			.then((res) => {
				console.log("res", res);
				navigate("/target");
			})
			.catch((error) => setMessage(error.APIMessage));
	};

	return (
		<div className=" flex flex-col items-center h-screen px-6 pb-10 relative">
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(onSubmitHandler)}
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
