import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import color from "../../constant/color";
import fonts from "../../constant/fonts";

import { MaterialIcons } from "@expo/vector-icons";

const QuickMenu = () => {
	return (
		<View style={styles.quickMenuContaner}>
			<Pressable style={styles.quickMenuBox}>
				<MaterialIcons name="dashboard" size={42} color={color.gray1} />
				<Text styles={styles.quickMenuText}>Progress</Text>
			</Pressable>
			<Pressable style={styles.quickMenuBox}>
				<MaterialIcons name="dashboard" size={42} color={color.gray1} />
				<Text styles={styles.quickMenuText}>Progress</Text>
			</Pressable>
			<Pressable style={styles.quickMenuBox}>
				<MaterialIcons name="dashboard" size={42} color={color.gray1} />
				<Text styles={styles.quickMenuText}>How To Use</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	quickMenuContaner: {
		marginVertical: 10,
		padding: 2,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	quickMenuBox: {
		height: 103,
		width: "30%",
		maxWidth: 103,
		paddingVertical: 15,
		marginVertical: 10,
		borderRadius: 15,
		backgroundColor: "white",
		justifyContent: "space-around",
		alignItems: "center",
		elevation: 2,
	},
	quickMenuText: {
		fontSize: 13,
		color: color.gray1,
		fontFamily: fonts.regular,
		textAlign: "center",
	},
});
export default QuickMenu;
