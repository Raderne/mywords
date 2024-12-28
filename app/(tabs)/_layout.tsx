import { HapticTab } from "@/components/HapticTab";
import { TabBarIcon } from "@/components/ui/TabBarIcon";
import { useTheme } from "@/hooks/ThemeContext";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	const theme = useTheme();

	return (
		<Tabs
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarButton: (props) => <HapticTab {...props} />,
				tabBarStyle: {
					backgroundColor: theme.backgroundColor,
					elevation: 0,
					shadowOpacity: 0,
					borderTopWidth: 0,
					height: 80,
				},
				sceneStyle: {
					backgroundColor: theme.backgroundColor,
				},
				tabBarIcon: ({ focused, color, size }) => (
					<TabBarIcon
						focused={focused}
						color={color}
						size={size}
						route={route}
					/>
				),
				tabBarLabelStyle: {
					display: "none",
				},
				tabBarActiveTintColor: theme.textColor,
				tabBarInactiveTintColor: theme.textColor + "80",
			})}
		>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="profile" />
		</Tabs>
	);
}
