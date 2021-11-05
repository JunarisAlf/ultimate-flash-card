import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RadioBtn from './RadioBtn';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const InputTextBtn = (props) => {
    const [active, setActive] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{
                        ...styles.inputLabelText,
                        color: active ? color.gray3 : color.blueGray,
                    }}
                >
                    {props.label}
                </Text>
                <RadioBtn active={active} setActive={setActive} />
            </View>
            {!active && <TextInput {...props} style={styles.textInput} />}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginVertical: 5,
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

export default InputTextBtn;
