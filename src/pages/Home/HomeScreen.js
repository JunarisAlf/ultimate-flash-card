import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import color from "../../constant/color";
import QuickMenu from "./QuickMenu";
import Groub from "./Groub";

const HomeScreen = ({ navigation }) => {
	return (
		<ScrollView style={styles.container}>
			<MaterialIcons name="sort" size={32} color="black" />

			<Text style={styles.textHeader}>
				Hello, &nbsp;
				<Text style={{ fontFamily: "Lato_400Regular" }}>
					Let's Learn Something New Today!
				</Text>
			</Text>

			<QuickMenu />

			<Text style={styles.groubHeadTitle}>Your Deck Group</Text>
			<Groub />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		paddingHorizontal: 18,
	},
	textHeader: {
		color: color.gray1,
		fontSize: 24,
		fontFamily: "Lato_300Light",
		marginTop: 14,
		paddingRight: "20%",
	},
	groubHeadTitle: {
		fontFamily: "Lato_400Regular",
		color: color.gray1,
		fontSize: 24,
	},
});
export default HomeScreen;
