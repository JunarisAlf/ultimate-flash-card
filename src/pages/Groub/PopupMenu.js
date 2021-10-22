import React from "react";
import {
	View,
	Text,
	Modal,
	TouchableWithoutFeedback,
	StyleSheet,
} from "react-native";
import color from "../../constant/color";

const PopupMenu = ({ visible, setPopupMenuVisible }) => {
	return (
		<Modal visible={visible} transparent={true}>
			<TouchableWithoutFeedback onPress={() => setPopupMenuVisible(false)}>
				<View style={styles.modalOutside} />
			</TouchableWithoutFeedback>
			<View style={styles.modalContainer}>
				<Text style={styles.modalText}>Edit</Text>
				<Text style={styles.modalText}>Delete</Text>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalOutside: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	modalContainer: {
		width: 116,
		backgroundColor: color.white,
		paddingLeft: 15,
		paddingVertical: 12,
		borderRadius: 4,
		borderWidth: 0.2,
		borderColor: color.gray4,
		elevation: 1,
		position: "absolute",
		right: 10,
		top: 10,
	},
	modalText: {
		fontFamily: "Lato_400Regular",
		color: color.gray2,
		fontSize: 14,
		paddingVertical: 3,
	},
});
export default PopupMenu;
