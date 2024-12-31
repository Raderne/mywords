import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
	return (
		<Tabs tabBar={(props) => <TabBar {...props} />}>
			<Tabs.Screen
				name="index"
				options={{ headerShown: false, title: "Home" }}
			/>
			<Tabs.Screen
				name="exercise"
				options={{ headerShown: false, title: "Exercise" }}
			/>
			<Tabs.Screen
				name="reading"
				options={{ headerShown: false, title: "Read" }}
			/>
			<Tabs.Screen
				name="profile"
				options={{ headerShown: false, title: "Profile" }}
			/>
		</Tabs>
	);
}
