export interface RepoType {
	save: (token: string) => void;
	get: () => string;
	remove: () => void;
}
