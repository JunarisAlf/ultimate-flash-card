import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../../constant/color";
import { Entypo } from "@expo/vector-icons";
import fonts from "../../constant/fonts";

const NewGroub = () => {
	return (
		<TouchableOpacity style={styles.newGroubBox} delayPressIn={50}>
			<Entypo name="plus" size={94} color={color.gray3} />
			<Text style={styles.newGroubText}>Create New Groub</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	newGroubBox: {
		width: "100%",
		height: 200,
		marginBottom: 30,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: color.gray2,
		borderStyle: "dashed",
		justifyContent: "center",
		alignItems: "center",
	},
	newGroubText: {
		fontFamily: fonts.bold,
		fontSize: 14,
		color: color.gray3,
	},
});
export default NewGroub;
