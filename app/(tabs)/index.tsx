import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/ThemeContext";

const index = () => {
	const theme = useTheme();

	return (
		<View
			style={[styles.container, { backgroundColor: theme.backgroundColor }]}
		>
			<Text>index</Text>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
