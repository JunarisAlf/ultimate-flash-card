import React from 'react';
import { View, Text } from 'react-native';
import PopupMenu from './PopupMenu';
import ModalDeleteConfirmation from './ModalDeleteConfirmation';
import ModalEditDeck from './ModalEditDeck';
import ModalStartReview from './ModalStartReview';
import ModalFilter from './ModalFilter';

const DeckModal = ({
    setPopupMenuVisible,
    popupMenuVisible,
    deleteConfirmationVisible,
    setDeleteConfirmationVisible,
    editDeckVisible,
    setEditDeckVisible,
    startReviewVisible,
    setStartReviewVisible,
    modalFilterVisible,
    setModalFilterVisible,
    filters,
    setFilters,
    sort,
    setSort,
}) => {
    return (
        <View>
            {popupMenuVisible && (
                <PopupMenu
                    setVisible={setPopupMenuVisible}
                    visible={popupMenuVisible}
                    setDeleteConfirmationVisible={setDeleteConfirmationVisible}
                    setEditDeckVisible={setEditDeckVisible}
                />
            )}
            {deleteConfirmationVisible && (
                <ModalDeleteConfirmation
                    visible={deleteConfirmationVisible}
                    setVisible={setDeleteConfirmationVisible}
                />
            )}
            {editDeckVisible && (
                <ModalEditDeck
                    setVisible={setEditDeckVisible}
                    visible={editDeckVisible}
                    value="Daily Word Vocabulary"
                />
            )}
            {modalFilterVisible && (
                <ModalFilter
                    filters={filters}
                    setFilters={setFilters}
                    sort={sort}
                    setSort={setSort}
                    visible={modalFilterVisible}
                    setVisible={setModalFilterVisible}
                    setModalFilterVisible={setModalFilterVisible}
                />
            )}
            {startReviewVisible && (
                <ModalStartReview
                    setVisible={setStartReviewVisible}
                    visible={startReviewVisible}
                    value="Daily Word Vocabulary"
                />
            )}
        </View>
    );
};

export default React.memo(DeckModal);
