import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import InputText from '../../component/input/InputText';
import InputTextBtn from '../../component/input/InputTextBtn';
import ImageInput from '../../component/input/ImageInput';
import InputDropDown from '../../component/input/InputDropDown';

import color from '../../constant/color';
import fonts from '../../constant/fonts';
import SoundsList from '../../Dummy/Sounds';
const AddCardScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            title: 'Create New Card',
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headingText}>Front Card</Text>
                <View style={styles.fromContainer}>
                    <InputText label="Text 1" placeholder="Type Something" />
                    <Text style={styles.textImportant}>*Required</Text>
                    <ImageInput label="Image" />
                    <InputTextBtn label="Text 2" placeholder="Type Something" />
                    <InputDropDown label="Sound" datas={SoundsList} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
    },
    fromContainer: {
        width: '100%',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.blueGray,
        borderStyle: 'dashed',
    },
    headingText: {
        fontFamily: fonts.medium,
        fontSize: 18,
        color: color.blueGray,
    },
    textImportant: {
        color: color.red,
        fontFamily: fonts.regular,
        fontSize: 12,
        paddingVertical: 5,
    },
});
export default AddCardScreen;
