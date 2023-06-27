export interface CommonButtonType {
	type: "button" | "submit" | "reset" | undefined;
	style?: string;
	onClick: () => void;
	children: React.ReactNode;
}
