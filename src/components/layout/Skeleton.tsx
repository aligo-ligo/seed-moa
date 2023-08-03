import "../../styles/skeleton.css";
const SkeletonElement = ({ type }: any) => {
	const classes = `skeleton ${type}`;
	return (
		<>
			<div className={classes}>
				<div className="shimmer-wrapper">
					<div className="shimmer"></div>
				</div>
			</div>
		</>
	);
};

export default SkeletonElement;
