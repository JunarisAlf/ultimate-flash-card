import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConfirmationModal from '../../component/ModalThemplate/Confirmation';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const ModalDeleteConfirmation = (props) => {
    return (
        <ConfirmationModal {...props}>
            <Text style={styles.confirmationText}>
                Are You Sure Want To Delete This Groub?
            </Text>
            <View style={styles.optionsContainer}>
                <Text style={styles.optionNo}>No</Text>
                <Text style={styles.optionYes}>Delete</Text>
            </View>
        </ConfirmationModal>
    );
};

const styles = StyleSheet.create({
    confirmationText: {
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    optionsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    optionNo: {
        color: color.blueGray,
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    optionYes: {
        marginLeft: 30,
        color: color.red,
        fontFamily: fonts.regular,
        fontSize: 16,
    },
});
export default ModalDeleteConfirmation;
