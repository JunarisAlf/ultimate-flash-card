import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fonts from '../../constant/fonts';
import color from '../../constant/color';

const CardStatus = () => {
    return (
        <View style={[styles.container, styles.wrapper]}>
            <View style={styles.container}>
                <View style={{ ...styles.box, backgroundColor: color.green }} />
                <Text style={styles.text}>Easy</Text>
            </View>
            <View style={styles.container}>
                <View
                    style={{ ...styles.box, backgroundColor: color.yellow }}
                />
                <Text style={styles.text}>Hard</Text>
            </View>
            <View style={styles.container}>
                <View style={{ ...styles.box, backgroundColor: color.red }} />
                <Text style={styles.text}>Fail</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    box: {
        height: 12,
        width: 12,
        marginRight: 5,
        marginLeft: 12,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 12,
    },
});
export default CardStatus;
