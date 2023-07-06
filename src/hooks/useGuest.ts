import { useContext } from "react";
import { GuestContext } from "../context/GuestContext";

export const useGuest = () => {
	const guestService = useContext(GuestContext);
	if (!guestService) {
		throw new Error("Can't find guestProvider");
	}
	return guestService;
};
