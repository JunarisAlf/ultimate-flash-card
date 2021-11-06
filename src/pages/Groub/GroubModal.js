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
            {popupMenuVisible && (
                <PopupMenu
                    setVisible={setPopupMenuVisible}
                    visible={popupMenuVisible}
                    setDeleteConfirmationVisible={setDeleteConfirmationVisible}
                />
            )}
            {deleteConfirmationVisible && (
                <ModalDeleteConfirmation
                    visible={deleteConfirmationVisible}
                    setVisible={setDeleteConfirmationVisible}
                />
            )}

            {modalAddDeckVisible && (
                <ModalAddDeck
                    setVisible={setModalAddDeckVisible}
                    visible={modalAddDeckVisible}
                />
            )}
        </View>
    );
};

export default GroubModal;
