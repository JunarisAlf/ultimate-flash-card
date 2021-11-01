import React from 'react';
import { View, Text } from 'react-native';
import PopupMenu from './PopupMenu';
import ModalDeleteConfirmation from './ModalDeleteConfirmation';

const DeckModal = ({
    setPopupMenuVisible,
    popupMenuVisible,
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
        </View>
    );
};

export default DeckModal;
