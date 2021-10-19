import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import color from "../../constant/color";

const asset = {
	image1: require("../../../assets/english1.jpeg"),
	image2: require("../../../assets/english2.jpeg"),
};
const Groub = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.groubBox} delayPressIn={50}>
				<ImageBackground style={styles.groubImage} source={asset.image1} />

				<View style={styles.groubNameContainer}>
					<Text style={styles.groubName}>English Beginner Vocabulary</Text>

					<View style={styles.groubDetailContainer}>
						<View style={styles.groubDetail}>
							<Feather name="folder" size={14} color={color.gray3} />
							<Text style={styles.groubDetailText}>4</Text>
						</View>
						<View style={styles.groubDetail}>
							<MaterialIcons
								name="calendar-view-day"
								size={14}
								color={color.gray3}
							/>
							<Text style={styles.groubDetailText}>99</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.groubBox} delayPressIn={50}>
				<ImageBackground style={styles.groubImage} source={asset.image2} />

				<View style={styles.groubNameContainer}>
					<Text style={styles.groubName}>English Beginner Vocabulary</Text>

					<View style={styles.groubDetailContainer}>
						<View style={styles.groubDetail}>
							<Feather name="folder" size={14} color={color.gray3} />
							<Text style={styles.groubDetailText}>4</Text>
						</View>
						<View style={styles.groubDetail}>
							<MaterialIcons
								name="calendar-view-day"
								size={14}
								color={color.gray3}
							/>
							<Text style={styles.groubDetailText}>99</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.groubBox} delayPressIn={50}>
				<ImageBackground style={styles.groubImage} source={asset.image1} />

				<View style={styles.groubNameContainer}>
					<Text style={styles.groubName}>English Beginner Vocabulary</Text>

					<View style={styles.groubDetailContainer}>
						<View style={styles.groubDetail}>
							<Feather name="folder" size={14} color={color.gray3} />
							<Text style={styles.groubDetailText}>4</Text>
						</View>
						<View style={styles.groubDetail}>
							<MaterialIcons
								name="calendar-view-day"
								size={14}
								color={color.gray3}
							/>
							<Text style={styles.groubDetailText}>99</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		paddingBottom: 50,
	},
	groubBox: {
		width: "100%",
		height: 200,
		marginBottom: 15,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		overflow: "hidden",
	},
	groubImage: {
		flex: 4,
		width: "100%",
	},

	groubNameContainer: {
		flex: 1,
		paddingHorizontal: 2,
		width: "100%",
		backgroundColor: "#FFF",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	groubName: {
		flex: 10,
		fontSize: 16,
		fontFamily: "Lato_400Regular",
		color: color.gray2,
	},
	groubDetailContainer: {
		flex: 3,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	groubDetail: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	groubDetailText: {
		fontSize: 12,
		marginLeft: 3,
		color: color.gray3,
		fontFamily: "Lato_400Regular",
	},
});

export default Groub;
