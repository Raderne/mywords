import { View, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ui/ThemedText";

const profile = () => {
	return (
		<View style={styles.container}>
			<ThemedText>profile</ThemedText>
		</View>
	);
};

export default profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
