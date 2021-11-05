import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../../constant/color';

const RadioBtn = ({ active, setActive }) => {
    return (
        <TouchableOpacity
            style={{ justifyContent: 'center' }}
            onPress={() => setActive(!active)}
        >
            <View
                style={{
                    ...styles.radioContainer,
                    backgroundColor: active ? color.gray3 : color.blueGray,
                }}
            >
                <View
                    style={{
                        ...styles.radioCircle,
                        right: active ? 10 : -4,
                        borderColor: active ? color.gray3 : color.blueGray,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioContainer: {
        position: 'relative',
        height: 8,
        width: 18,
        borderRadius: 10,
        alignSelf: 'center',
        marginHorizontal: 10,
        backgroundColor: color.blueGray,
    },
    radioCircle: {
        position: 'absolute',
        // right: -4,
        top: -2,
        height: 12,
        width: 12,
        backgroundColor: color.white,
        borderWidth: 0.8,
        borderColor: color.blueGray,
        borderRadius: 6,
    },
});

export default RadioBtn;
