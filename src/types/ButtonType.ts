export interface CommonButtonType {
	type: "button" | "submit" | "reset" | undefined;
	style?: string;
	onClick?: () => void;
	disable?: boolean;
	children: React.ReactNode;
}
