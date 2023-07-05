import StyledButton from "../common/StyledButton";

const CheckModal = () => {
	return (
		<div className="bg-white rounded-md">
			<h1 className="font-semibold text-xl mb-5"> 체크 포인트 최종 확인 </h1>

			<p className="font-light text-sm">
				매일 루틴을 이행하여 해당 세분화 목표를 달성하셨나요?
			</p>
			<br />
			<p className="font-light text-sm">체크 포인트는 ~~ 입니다</p>

			<div className="flex justify-center gap-4 p-4 mt-10">
				<StyledButton styleName="sharingExit" type="button">
					네
				</StyledButton>
				<StyledButton styleName="sharingExit" type="button">
					아니요
				</StyledButton>
			</div>
		</div>
	);
};

export default CheckModal;
