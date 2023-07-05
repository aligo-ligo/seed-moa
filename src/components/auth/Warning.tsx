export default function Warnning({ message }: { message: string }) {
	console.log("inWaring", message);
	return (
		<div className="text-sm font-semibold text-fail self-center mt-2">
			{message}
		</div>
	);
}
