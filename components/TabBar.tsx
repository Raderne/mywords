import { View, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from "./TabBarButton";
import { Colors } from "@/constants/Colors";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	return (
		<View style={styles.tabBar}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					typeof options.tabBarLabel === "string"
						? options.tabBarLabel
						: options.title ?? route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TabBarButton
						key={route.key}
						routeName={route.name}
						onPress={onPress}
						onLongPress={onLongPress}
						color={isFocused ? Colors.dark.primary : Colors.dark.text}
						label={label}
						isFocused={isFocused}
					/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		height: 80,
		backgroundColor: Colors.dark.background,
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 30,
	},
});
