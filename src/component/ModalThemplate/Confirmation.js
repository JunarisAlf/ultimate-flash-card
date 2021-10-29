import React, { useRef } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import color from '../../constant/color';

const Confirmation = ({ children, visible, setDeleteConfirmationVisible }) => {
    const opacityZero = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(opacityZero, {
            toValue: 0.7,
            duration: 200,
            delay: 0,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={'fade'}
            onShow={() => fadeIn()}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    setDeleteConfirmationVisible(false);
                }}
            >
                <Animated.View
                    style={{ ...styles.modalOutside, opacity: opacityZero }}
                />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>{children}</View>
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
        width: '90%',
        maxWidth: 400,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignSelf: 'center',
        marginTop: '45%',
        borderRadius: 6,
        backgroundColor: color.white,
    },
});

export default Confirmation;
