import React from 'react';
import {
    View,
    Modal,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import color from '../../constant/color';

const PopupMenu = ({ visible, setPopupMenuVisible, children }) => {
    return (
        <Modal visible={visible} transparent={true}>
            <TouchableWithoutFeedback
                onPress={() => setPopupMenuVisible(false)}
            >
                <View style={styles.modalOutside} />
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
    },
    modalContainer: {
        minWidth: 120,
        backgroundColor: color.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        borderWidth: 0.2,
        borderColor: color.gray4,
        elevation: 1,
        position: 'absolute',
        right: 10,
        top: 15,
    },
});
export default PopupMenu;
