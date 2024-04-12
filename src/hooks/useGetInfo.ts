import { useQuery } from "@tanstack/react-query";
import { LANDING_KEY } from "../constants/queryKeyConstants";
import { GuestService } from "../types/GuestType";

export const useInfo = (guestService: GuestService) => {
	return useQuery({
		queryKey: [LANDING_KEY],
		queryFn:  () => {
		return guestService?.getUserAndTargetNum();
	}});
};
