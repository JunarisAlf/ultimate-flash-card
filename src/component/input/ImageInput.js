import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RadioBtn from '../../component/input/RadioBtn';
import color from '../../constant/color';
import fonts from '../../constant/fonts';
import { Fontisto, FontAwesome } from '@expo/vector-icons';

const ImageInput = (props) => {
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

            {!active && (
                <View style={styles.selectImageContainer}>
                    <TouchableOpacity style={styles.selectImageBox}>
                        <Fontisto
                            name="world-o"
                            size={28}
                            color={color.white}
                        />
                        <Text style={styles.selectImageText}>Internet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectImageBox}>
                        <FontAwesome
                            name="file-photo-o"
                            size={28}
                            color={color.white}
                        />
                        <Text style={styles.selectImageText}>Galery</Text>
                    </TouchableOpacity>
                    <Image
                        style={{
                            ...styles.selectImageBox,
                            borderWidth: 1.5,
                            borderColor: color.blueGray,
                        }}
                        source={require('../../../assets/card-image/001.jpeg')}
                    />
                </View>
            )}
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
    selectImageContainer: {
        flexDirection: 'row',
    },
    selectImageBox: {
        height: 80,
        width: 80,
        borderRadius: 10,
        backgroundColor: color.blueGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 5,
    },
    selectImageText: {
        marginTop: 5,
        color: color.white,
        fontFamily: fonts.regular,
        fontSize: 14,
    },
});

export default ImageInput;
