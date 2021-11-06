import React, { useRef } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import color from '../../constant/color';

const ModalAddDeck = ({ children, visible, setVisible }) => {
    const opacityZero = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(opacityZero, {
            toValue: 0.7,
            duration: 300,
            delay: 150,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(opacityZero, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={'slide'}
            onShow={() => fadeIn()}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    fadeOut();
                    setTimeout(() => {
                        setVisible(false);
                    }, 200);
                }}
            >
                <Animated.View
                    style={{ ...styles.modalOutside, opacity: opacityZero }}
                />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
                <View style={styles.swipeDownIcon} />
                <View style={styles.form}>{children}</View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOutside: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: color.black,
    },
    modalContainer: {
        // height: 200,
        position: 'absolute',
        paddingHorizontal: 20,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: color.white,
        alignItems: 'center',
    },
    swipeDownIcon: {
        width: 28,
        height: 5,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: color.gray5,
        marginBottom: 15,
    },
    form: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export default ModalAddDeck;
