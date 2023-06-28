import { useContext } from "react";
import { TargetContext } from "../context/TargetContext";

export const useInfo = () => {
	const targetService = useContext(TargetContext);
	if (!targetService) {
		throw new Error("Can't find targetProvider");
	}
	return targetService;
};
