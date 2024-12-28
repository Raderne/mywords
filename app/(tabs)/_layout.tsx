import { HapticTab } from "@/components/HapticTab";
import { useTheme } from "@/hooks/ThemeContext";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	const theme = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarStyle: {
					backgroundColor: theme.backgroundColor,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarStyle: {
						backgroundColor: theme.backgroundColor,
					},
				}}
			/>
		</Tabs>
	);
}
