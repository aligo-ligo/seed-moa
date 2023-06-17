import { useContext } from "react";
import { InfoContext } from "../context/TargetContext";

export const useInfo = () => {
	const infoService = useContext(InfoContext);
	if (!infoService) {
		throw new Error("Can't find InfoProvider");
	}
	return infoService;
};
