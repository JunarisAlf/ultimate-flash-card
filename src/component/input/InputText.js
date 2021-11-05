import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const InputText = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>{props.label}</Text>
            <TextInput {...props} style={styles.textInput} />
        </View>
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
});

export default InputText;
