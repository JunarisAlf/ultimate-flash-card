import React from 'react';
import PopupMenu from './PopupMenu';
import ModalAddDeck from './ModalAddDeck';
import ModalDeleteConfirmation from './ModalDeleteConfirmation';

import { View, Text } from 'react-native';

const GroubModal = ({
    setPopupMenuVisible,
    popupMenuVisible,
    setModalAddDeckVisible,
    modalAddDeckVisible,
    deleteConfirmationVisible,
    setDeleteConfirmationVisible,
}) => {
    return (
        <View>
            <PopupMenu
                setPopupMenuVisible={setPopupMenuVisible}
                visible={popupMenuVisible}
                setDeleteConfirmationVisible={setDeleteConfirmationVisible}
            />
            <ModalDeleteConfirmation
                visible={deleteConfirmationVisible}
                setDeleteConfirmationVisible={setDeleteConfirmationVisible}
            />

            <ModalAddDeck
                setModalAddDeckVisible={setModalAddDeckVisible}
                visible={modalAddDeckVisible}
            />
        </View>
    );
};

export default GroubModal;
