import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PopUpMenuThemplate from '../../component/ModalThemplate/PopUpMenu';

import color from '../../constant/color';
import fonts from '../../constant/fonts';

const PopupMenu = (props) => {
    return (
        <PopUpMenuThemplate {...props}>
            <Text style={styles.modalText}>Edit</Text>
            <Text
                onPress={() => props.setDeleteConfirmationVisible(true)}
                style={styles.modalText}
            >
                Delete
            </Text>
        </PopUpMenuThemplate>
    );
};

const styles = StyleSheet.create({
    modalText: {
        fontFamily: fonts.regular,
        color: color.gray2,
        fontSize: 16,
        paddingVertical: 8,
    },
});
export default PopupMenu;
