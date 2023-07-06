import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTarget } from "./useTarget";
import { TargetInfoType, TargetService } from "../types/TargetTypes";
import { GuestService } from "../types/GuestType";

export const useGetTargetList = (targetService: TargetService) => {
	return useQuery(["targets", "all"], () => {
		return targetService?.getAllTarget();
	});
};

export const useGetTarget = (
	id: string | undefined,
	targetService: TargetService
) => {
	return useQuery(["target"], () => {
		return targetService?.getTarget(id);
	});
};

export const useGetGuestTarget = (
	id: string | undefined,
	guestService: GuestService
) => {
	return useQuery(["guest"], () => {
		return guestService?.getGuestTarget(id);
	});
};

export const useModifySub = (id: string, test: any) => {
	const queryClient = useQueryClient();
	const targetService = useTarget();
	const { data } = useGetTarget(id, targetService);
	const subGoalMutation = useMutation(async (id: string) => {
		return targetService.updateSubGoal(test);
	});

	//   const { data }: { data: UserSettingType[] | undefined } =
	//     useAllUserSetting(infoService);
	//   const userSetting = data?.find((setting) => setting.uuid === uuid);
	//   const userDeleteMutation = useMutation(
	//     async (userId: string) => {
	//       return infoService?.deleteUser(userId);
	//     },
	//     {
	//       onSuccess: () => {
	//         queryClient.invalidateQueries(['users', page]);
	//       },
	//     }
	//   );
	//   const settingDeleteMutation = useMutation(
	//     async (userId: string) => {
	//       return infoService?.deleteUserSetting(userId);
	//     },
	//     {
	//       onSuccess: () => {
	//         queryClient.invalidateQueries(['userSetting', 'all']);
	//       },
	//     }
	//   );
	//   const nameMutation = useMutation(
	//     async (info: { name: string; id: string }) => {
	//       return infoService?.patchUserName(info);
	//     },
	//     {
	//       onSuccess: () => {
	//         queryClient.invalidateQueries(['users', page]);
	//       },
	//     }
	//   );

	//   return {
	//     userSetting,
	//     userDeleteMutation,
	//     settingDeleteMutation,
	//     nameMutation,
	//   };
	// };
};
