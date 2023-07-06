import { TargetCreateResultType, TargetType } from "./TargetTypes";

export interface GuestService {
	getGuestTarget: (id: string | undefined) => Promise<TargetType>;
	getTargetVote: ({
		id,
		success,
	}: VoteResponseType) => Promise<TargetCreateResultType>;
}

export type VoteResponseType = {
	id: string | undefined;
	success: boolean | null;
};
