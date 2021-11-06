import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import InputText from '../../component/input/InputText';
import InputTextBtn from '../../component/input/InputTextBtn';
import ImageInput from '../../component/input/ImageInput';
import InputDropDown from '../../component/input/InputDropDown';
import SaveButton from '../../component/input/Button';
import AddNotif from '../../component/ModalThemplate/Confirmation';

import color from '../../constant/color';
import fonts from '../../constant/fonts';
import SoundsList from '../../Dummy/Sounds';

const AddCardScreen = ({ navigation }) => {
    const [AddNotifVisible, setAddNotifVisible] = useState(false);
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
            <View>
                <Text style={styles.headingText}>Back Card</Text>
                <View style={styles.fromContainer}>
                    <InputText label="Text 1" placeholder="Type Something" />
                    <Text style={styles.textImportant}>*Required</Text>
                    <ImageInput label="Image" />
                    <InputTextBtn label="Text 2" placeholder="Type Something" />
                    <InputDropDown label="Sound" datas={SoundsList} />
                </View>
            </View>
            <SaveButton
                label="SAVE"
                onPressHandler={() => setAddNotifVisible(true)}
            />

            <AddNotif
                visible={AddNotifVisible}
                setVisible={setAddNotifVisible}
                duration={100}
            >
                <Text style={styles.AddNotif}>New Card Has Been Added</Text>
            </AddNotif>
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
    AddNotif: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: color.blueGray,
        textAlign: 'center',
    },
});
export default AddCardScreen;
