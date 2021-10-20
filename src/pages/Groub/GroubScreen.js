import React, { useEffect } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import color from "../../constant/color";
import Deck from "./Deck";

const decks = [
	{
		key: "1",
		name: "Daily Word Vocabullary",
		progress: "80%",
	},
	{
		key: "2",
		name: "Verb Vocabulary",
		progress: "65%",
	},
	{
		key: "3",
		name: "Noun Vocabulary",
		progress: "50%",
	},
	{
		key: "4",
		name: "Noun Vocabular 2",
		progress: "100%",
	},
];

const GroubScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			title: "English Beginner Vocabulary",
		});
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Your Decks</Text>
			<FlatList
				key={"_"}
				keyExtractor={(deck) => "_" + deck.key}
				data={decks}
				numColumns={2}
				columnWrapperStyle={styles.listWrapper}
				renderItem={(deck) => <Deck deck={deck.item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 18,
	},
	headerText: {
		marginTop: 10,
		fontFamily: "Lato_700Bold",
		fontSize: 18,
		color: color.gray2,
	},
	listWrapper: {
		justifyContent: "space-between",
	},
});
export default GroubScreen;
