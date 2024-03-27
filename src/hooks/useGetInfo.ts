import { useQuery } from "@tanstack/react-query";
import { GuestService } from "../types/GuestType";
import { LANDING_KEY } from "../utils/constant/queryKeyConstants";

export const useInfo = (guestService: GuestService) => {
	return useQuery([LANDING_KEY], () => {
		return guestService?.getUserAndTargetNum();
	});
};
