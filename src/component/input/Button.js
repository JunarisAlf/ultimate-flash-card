import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const TextInput = ({ label }) => {
    return (
        <View style={styles.buttonBox}>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default TextInput;
