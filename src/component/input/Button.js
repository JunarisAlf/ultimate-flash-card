import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const TextInput = ({ label, onPressHandler, additionStyle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ ...styles.buttonBox, ...additionStyle }}
            onPress={() => onPressHandler()}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonBox: {
        height: 40,
        marginVertical: 20,
        width: '100%',
        backgroundColor: color.blueGray,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
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

export default TextInput;
