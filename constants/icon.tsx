import { Feather } from "@expo/vector-icons";

export type IconType = {
	[key in "index" | "exercise" | "reading" | "profile" | string]: (
		props: any,
	) => JSX.Element;
};

export const icon: IconType = {
	index: (props: any) => (
		<Feather
			name="home"
			size={24}
			{...props}
		/>
	),
	exercise: (props: any) => (
		<Feather
			name="activity"
			size={24}
			{...props}
		/>
	),
	reading: (props: any) => (
		<Feather
			name="book"
			size={24}
			{...props}
		/>
	),
	profile: (props: any) => (
		<Feather
			name="user"
			size={24}
			{...props}
		/>
	),
};
