import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../../constant/color";
import fonts from "../../constant/fonts";

const Deck = ({ deck }) => {
	return (
		<TouchableOpacity style={styles.deckBoxContainer}>
			<LinearGradient
				style={styles.deckBox}
				colors={["#4481EB", "#04BEFE"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
			>
				<MaterialCommunityIcons
					name="view-dashboard-outline"
					style={styles.iconDecoration}
					size={110}
					color="#FFF"
				/>
				<Text style={styles.deckName}>{deck.name}</Text>
			</LinearGradient>

			<View style={styles.deckProgress}>
				<View style={styles.deckProgressBar}>
					<LinearGradient
						style={{ ...styles.deckProgressComplate, width: deck.progress }}
						colors={["#4481EB", "#04BEFE"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					/>
				</View>
				<Text style={styles.deckProgressNumber}>{deck.progress}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	deckBoxContainer: {
		width: "48%",
	},
	deckBox: {
		width: "100%",
		height: 66,
		padding: 10,
		borderRadius: 10,
		marginVertical: 5,
	},
	deckName: {
		color: color.white,
		fontFamily: fonts.medium,
		fontSize: 16,
	},
	iconDecoration: {
		position: "absolute",
		right: -15,
		top: 5,
		opacity: 0.15,
	},
	deckProgress: {
		flex: 1,
		height: 10,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	deckProgressBar: {
		flex: 70,
		height: 6,
		backgroundColor: color.gray4,
		borderRadius: 5,
	},
	deckProgressComplate: {
		width: "80%",
		height: "100%",
		borderRadius: 5,
	},
	deckProgressNumber: {
		flex: 20,
		textAlign: "center",
		fontFamily: fonts.regular,
		fontSize: 12,
		color: color.gray3,
	},
});
export default Deck;
