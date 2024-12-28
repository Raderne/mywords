import { useEffect } from "react";
import { useTheme } from "@/hooks/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	interpolateColor,
	withDelay,
} from "react-native-reanimated";
import { StyleSheet, Text } from "react-native";

interface TabBarIconProps {
	focused: boolean;
	color: string;
	size: number;
	route: { name: string };
}

export const TabBarIcon = ({
	focused,
	color,
	size,
	route,
}: TabBarIconProps) => {
	const theme = useTheme();

	// Shared values for animations
	const backgroundProgress = useSharedValue(focused ? 1 : 0);
	const textOpacity = useSharedValue(focused ? 1 : 0);

	useEffect(() => {
		if (focused) {
			backgroundProgress.value = withTiming(1, { duration: 300 });
			textOpacity.value = withDelay(300, withTiming(1, { duration: 300 }));
		} else {
			textOpacity.value = withTiming(0, { duration: 200 });
			backgroundProgress.value = withDelay(
				200,
				withTiming(0, { duration: 300 }),
			);
		}
	}, [focused]);

	// Animated styles
	const animatedContainerStyle = useAnimatedStyle(() => ({
		backgroundColor: interpolateColor(
			backgroundProgress.value,
			[0, 1],
			["transparent", theme.primaryColor],
		),
		borderRadius: backgroundProgress.value * 10,
		paddingHorizontal: backgroundProgress.value * 10,
	}));

	const animatedTextStyle = useAnimatedStyle(() => ({
		opacity: textOpacity.value,
	}));

	// Define icons for each route
	let iconName: string;
	if (route.name === "index") {
		iconName = focused ? "home" : "home-outline";
	} else if (route.name === "profile") {
		iconName = focused ? "person" : "person-outline";
	} else {
		iconName = "help";
	}

	return (
		<Animated.View style={[styles.tabContainer, animatedContainerStyle]}>
			<Ionicons
				name={iconName as keyof typeof Ionicons.glyphMap}
				size={size}
				color={color || theme.textColor}
			/>
			{focused && (
				<Animated.Text
					style={[
						styles.tabLabel,
						{ color: theme.textColor },
						animatedTextStyle,
					]}
				>
					{route.name === "index" ? "Home" : "Profile"}
				</Animated.Text>
			)}
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		width: 100,
	},
	tabLabel: {
		marginLeft: 8,
		fontSize: 16,
		fontWeight: "bold",
	},
});
