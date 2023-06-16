type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const Goal = ({ setStep }: Props) => {
	console.log("ss", setStep);
	return (
		<div className="flex flex-col p-10 mt-8">
			<h1 className="text-4xl w-3/4 font-bold">
				이루고자 하는 목표를 작성해주세요
			</h1>

			<input
				type="text"
				className="placeholder:text-s w-full h-10 outline-none text-emerald-800 mt-40 border-b-4 border-main"
				placeholder="목표를 작성해주세요"
			/>

			<button
				className={`w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl`}
				onClick={() => {
					setStep("subGoal");
				}}
				type="button"
			>
				다음으로 가기
			</button>
		</div>
	);
};

export default Goal;
