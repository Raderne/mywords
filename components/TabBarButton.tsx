import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icon, IconType } from "@/constants/icon";

type TabBarButtonProps = {
	routeName: keyof IconType;
	onPress: () => void;
	onLongPress: () => void;
	label: string;
	isFocused: boolean;
	color: string;
};

const TabBarButton = ({
	routeName,
	onPress,
	onLongPress,
	label,
	isFocused,
	color,
}: TabBarButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={[
				styles.button,
				{ backgroundColor: isFocused ? color : "transparent" },
			]}
		>
			{icon[routeName]({ color: Colors.dark.text })}
			{isFocused ? (
				<Text style={[{ color: Colors.dark.text }, styles.text]}>{label}</Text>
			) : null}
		</Pressable>
	);
};

export default TabBarButton;

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 25,
	},
	text: {
		fontSize: 18,
		marginLeft: 5,
	},
});
