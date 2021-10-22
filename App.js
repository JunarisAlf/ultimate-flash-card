import React from "react";
import { Text, StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	useFonts,
	Lato_100Thin,
	Lato_100Thin_Italic,
	Lato_300Light,
	Lato_300Light_Italic,
	Lato_400Regular,
	Lato_400Regular_Italic,
	Lato_700Bold,
	Lato_700Bold_Italic,
	Lato_900Black,
	Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

import HomeScreen from "./src/pages/Home/HomeScreen";
import GroubScreen from "./src/pages/Groub/GroubScreen";
import { Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#FFF",
	},
};
const App = () => {
	let [fontsLoaded] = useFonts({
		Lato_300Light,
		Lato_400Regular,
		Lato_700Bold,
	});
	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	} else {
		return (
			<NavigationContainer theme={Theme}>
				<StatusBar backgroundColor={"#FFF"} barStyle={"dark-content"} />
				<Stack.Navigator initialRouteName={"HomeScreen"}>
					<Stack.Screen
						name="HomeScreen"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="GroubScreen"
						component={GroubScreen}
						options={{
							headerRight: (props) => (
								<Entypo
									{...props}
									name="dots-three-vertical"
									size={16}
									color="black"
								/>
							),
							headerTitleStyle: {
								fontFamily: "Lato_400Regular",
								fontSize: 14,
							},
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
};

export default App;
