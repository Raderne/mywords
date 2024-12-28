import { View, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/ThemeContext";
import { ThemedText } from "@/components/ui/ThemedText";

const index = () => {
	const theme = useTheme();

	return (
		<View
			style={[styles.container, { backgroundColor: theme.backgroundColor }]}
		>
			<ThemedText>index</ThemedText>
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
