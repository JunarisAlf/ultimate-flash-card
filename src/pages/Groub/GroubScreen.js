import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import color from "../../constant/color";
import Deck from "./Deck";
import PopupMenu from "./PopupMenu";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import fonts from "../../constant/fonts";

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
	const [popupMenuVisible, setPopupMenuVisible] = useState(false);
	useEffect(() => {
		navigation.setOptions({
			title: "English Beginner Vocabulary",
		});
	}, []);

	useLayoutEffect(
		() =>
			navigation.setOptions({
				headerRight: () => (
					<Entypo
						onPress={() => setPopupMenuVisible(true)}
						name="dots-three-vertical"
						size={16}
						color="black"
					/>
				),
			}),
		[navigation]
	);

	return (
		<View style={styles.container}>
			<PopupMenu
				setPopupMenuVisible={setPopupMenuVisible}
				visible={popupMenuVisible}
			/>
			<Text style={styles.headerText}>Your Decks</Text>
			<FlatList
				key={"_"}
				keyExtractor={(deck) => "_" + deck.key}
				data={decks}
				numColumns={2}
				columnWrapperStyle={styles.listWrapper}
				renderItem={(deck) => <Deck deck={deck.item} />}
			/>
			<Ionicons
				style={styles.addButton}
				name="add-circle"
				size={58}
				color={color.orange}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 18,
	},
	headerText: {
		marginTop: 10,
		fontFamily: fonts.bold,
		fontSize: 18,
		color: color.gray2,
	},
	listWrapper: {
		justifyContent: "space-between",
	},
	addButton: {
		position: "absolute",
		bottom: 10,
		right: 10,
	},
});
export default GroubScreen;
