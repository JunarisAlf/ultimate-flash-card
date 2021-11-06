import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const CheckBox = ({ checked, label, id, setCheckBox, pressHandler }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => setCheckBox(pressHandler(id))}
        >
            <View style={styles.checkBoxContainer}>
                {checked && <View style={styles.checkBoxFill}></View>}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 2,
    },
    checkBoxContainer: {
        width: 12,
        height: 12,
        borderRadius: 2,
        borderWidth: 1.5,
        backgroundColor: color.white,
        borderColor: color.blueGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBoxFill: {
        width: 5,
        height: 5,
        backgroundColor: color.blueGray,
    },
    label: {
        fontFamily: fonts.regular,
        fontSize: 14,
        paddingHorizontal: 5,
    },
});
export default CheckBox;
