import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";
import LastStep from "../components/goal/LastStep";
import Duration from "../components/goal/Duration";
import SubGoalRoutine from "../components/goal/SubGoalRoutine";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
	TargetCreateProps,
	TargetInfoType,
	TargetStepType,
} from "../types/TargetTypes";
import { useTarget } from "../hooks/useTarget";
import CreateBar from "../components/target/animationBars/CreateBar";
import useToastList from "../hooks/useToastList";
import CreateToast from "../components/toast/CreateToast";

const targetSchema: yup.ObjectSchema<any> = yup.object({
	goal: yup.string().required("목표를 입력해주세요"),
	subGoal: yup.array().of(
		yup.object().shape({
			id: yup.string(),
			value: yup.string().required("세부 목표를 작성해주세요"),
		})
	),
	routine: yup.array().of(
		yup.object().shape({
			id: yup.string(),
			value: yup.string().required("세부 목표를 작성해주세요"),
		})
	),
	endDate: yup.string().required("목표 달성일을 지정해주세요"),
});

const TargetCreate = () => {
	const { show } = useToastList();
	const targetService = useTarget();
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const [step, setStep] = useState<TargetStepType>("goal");

	const methods = useForm<TargetInfoType>({
		defaultValues: {
			subGoal: [{}, {}],
			routine: [{}, {}],
		},
		resolver: yupResolver(targetSchema),
	});

	const onSubmitHandler = (data: TargetInfoType) => {
		console.log("최종", data);
		console.log(message);
		show("createToast");
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
					className="w-full relative"
				>
					<CreateBar step={step} />
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
				<CreateToast />
			</FormProvider>
		</div>
	);
};

export default TargetCreate;
