import { Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { icon, IconType } from "@/constants/icon";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

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
	const scale = useSharedValue(0);

	useEffect(() => {
		scale.value = withSpring(
			typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
			{ duration: 350 },
		);
	}, [scale, isFocused]);

	const animatedStyle = useAnimatedStyle(() => {
		const scaleValue = interpolate(scale.value, [0, 1], [1.2, 1]);

		return {
			transform: [{ scale: scaleValue }],
		};
	});

	const animatedTextStyle = useAnimatedStyle(() => {
		const opacity = interpolate(scale.value, [0, 1], [0, 1]);
		const display = interpolate(scale.value, [0, 1], [0, 1]);

		return {
			opacity,
			display: display === 0 ? "none" : "flex",
		};
	});

	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={[
				styles.button,
				{
					backgroundColor: isFocused ? color : "transparent",
					borderRadius: 25,
				},
			]}
		>
			<Animated.View
				style={[animatedStyle, { flexDirection: "row", alignItems: "center" }]}
			>
				{icon[routeName]({ color: Colors.dark.text })}
				<Animated.Text
					style={[{ color: Colors.dark.text }, styles.text, animatedTextStyle]}
				>
					{label}
				</Animated.Text>
			</Animated.View>
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
	},
	text: {
		fontSize: 18,
		marginLeft: 5,
		opacity: 0,
		display: "none",
	},
});
