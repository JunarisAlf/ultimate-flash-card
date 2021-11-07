import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import RadioBtn from './RadioBtn';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const InputDropDown = ({
    datas,
    label,
    RdButton = true,
    DefaultVal = '',
    setSorts,
    handler,
}) => {
    const [active, setActive] = useState(false);
    const [selectedData, setSelectedData] = useState(DefaultVal);
    // useEffect(() => setSorts(handler(selectedData)), [selectedData]);
    return (
        <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text
                    style={{
                        ...styles.inputLabelText,
                        color: active ? color.gray3 : color.blueGray,
                    }}
                >
                    {label}
                </Text>
                {RdButton && <RadioBtn active={active} setActive={setActive} />}
            </View>
            {!active && (
                <View style={styles.dropDown}>
                    <Picker
                        itemStyle={{
                            fontFamily: fonts.regular,
                            color: color.gray3,
                        }}
                        selectedValue={selectedData}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedData(itemValue);
                            // setSorts(handler(itemValue));
                        }}
                    >
                        {datas.map((data) => (
                            <Picker.Item
                                color={color.gray2}
                                // fontFamily={fonts.regular}
                                key={data.id}
                                label={data.label}
                                value={data.id}
                            />
                        ))}
                    </Picker>
                </View>
            )}
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
    dropDown: {
        height: 48,
        width: '100%',
        marginTop: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: color.gray6,
        borderRadius: 8,
    },
});

export default React.memo(InputDropDown);
