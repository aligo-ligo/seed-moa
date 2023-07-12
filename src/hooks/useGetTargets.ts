import { useQuery } from "@tanstack/react-query";
import { TargetService } from "../types/TargetTypes";
import { GuestService } from "../types/GuestType";

export const useAllTarget = (targetService: TargetService) => {
	return useQuery(["targets"], () => {
		return targetService?.getAllTarget();
	});
};

export const useTargetOnUser = (
	id: string | undefined,
	targetService: TargetService
) => {
	return useQuery(["target", id], () => {
		return targetService?.getTarget(id);
	});
};

export const useTargetOnGuest = (
	id: string | undefined,
	guestService: GuestService
) => {
	return useQuery(["guest", id], () => {
		return guestService?.getGuestTarget(id);
	});
};
