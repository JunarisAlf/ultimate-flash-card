import React from "react";
import { Text, StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	useFonts,
	Roboto_100Thin,
	Roboto_100Thin_Italic,
	Roboto_300Light,
	Roboto_300Light_Italic,
	Roboto_400Regular,
	Roboto_400Regular_Italic,
	Roboto_500Medium,
	Roboto_500Medium_Italic,
	Roboto_700Bold,
	Roboto_700Bold_Italic,
	Roboto_900Black,
	Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

import HomeScreen from "./src/pages/Home/HomeScreen";
import GroubScreen from "./src/pages/Groub/GroubScreen";
import fonts from "./src/constant/fonts";

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
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
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
							headerTitleStyle: {
								fontFamily: fonts.regular,
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
