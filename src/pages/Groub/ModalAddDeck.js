import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import SlideUpMenuThemplate from '../../component/ModalThemplate/SlideUpMenu';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const ModalAddDeck = (props) => {
    return (
        <SlideUpMenuThemplate {...props}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabelText}>Name</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.buttonBox}>
                <Text style={styles.buttonText}>SAVE</Text>
            </View>
        </SlideUpMenuThemplate>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
    },
    inputLabelText: {
        fontFamily: fonts.medium,
        color: color.blueGray,
        fontSize: 16,
    },
    textInput: {
        height: 48,
        marginTop: 5,
        paddingHorizontal: 10,

        backgroundColor: color.gray6,
        borderRadius: 8,
    },
    buttonBox: {
        height: 40,
        marginVertical: 20,
        width: '100%',
        backgroundColor: color.blueGray,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: fonts.medium,
        color: color.white,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 40,
        textAlignVertical: 'center',
    },
});

export default ModalAddDeck;
