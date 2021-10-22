import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import color from "../../constant/color";
import QuickMenu from "./QuickMenu";
import Groub from "./Groub";
import NewGroub from "./NewGroub";
import fonts from "../../constant/fonts";

const HomeScreen = ({ navigation }) => {
	return (
		<ScrollView style={styles.container}>
			<MaterialIcons name="sort" size={32} color="black" />

			<Text style={styles.textHeader}>
				Hello, &nbsp;
				<Text style={{ fontFamily: fonts.regular }}>
					Let's Learn Something New Today!
				</Text>
			</Text>

			<QuickMenu />

			<Text style={styles.groubHeadTitle}>Your Deck Group</Text>
			<Groub />
			<NewGroub />
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
		fontFamily: fonts.light,
		marginTop: 14,
		paddingRight: "20%",
	},
	groubHeadTitle: {
		fontFamily: fonts.regular,
		color: color.gray1,
		fontSize: 24,
	},
});
export default HomeScreen;
