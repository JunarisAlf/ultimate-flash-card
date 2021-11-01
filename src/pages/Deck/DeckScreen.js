import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import NavHeader from '../../component/MicroComponent/ThreeDotNavigationHeader';
import DeckModal from './DeckModal';
import LearnAndReview from './LearnAndReview';

const GroubScreen = ({ navigation }) => {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false);
    const [modalAddDeckVisible, setModalAddDeckVisible] = useState(false);
    const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
        useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: 'Daily Word Vocabullary',
        });
    }, []);

    useLayoutEffect(
        () =>
            navigation.setOptions({
                headerRight: () => (
                    <NavHeader pressAction={setPopupMenuVisible} />
                ),
            }),
        [navigation]
    );

    return (
        <View style={styles.container}>
            <DeckModal
                popupMenuVisible={popupMenuVisible}
                setPopupMenuVisible={setPopupMenuVisible}
                modalAddDeckVisible={modalAddDeckVisible}
                setModalAddDeckVisible={setModalAddDeckVisible}
                deleteConfirmationVisible={deleteConfirmationVisible}
                setDeleteConfirmationVisible={setDeleteConfirmationVisible}
            />
            <LearnAndReview />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
    },
});
export default GroubScreen;
