import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import color from '../../constant/color';
import Deck from './Deck';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import NavHeader from '../../component/MicroComponent/ThreeDotNavigationHeader';
import fonts from '../../constant/fonts';
import GroubModal from './GroubModal';

const decks = [
    {
        key: '1',
        name: 'Daily Word Vocabullary',
        progress: '80%',
        link: 'DeckScreen',
    },
    {
        key: '2',
        name: 'Verb Vocabulary',
        progress: '65%',
        link: 'DeckScreen',
    },
    {
        key: '3',
        name: 'Noun Vocabulary',
        progress: '50%',
        link: 'DeckScreen',
    },
    {
        key: '4',
        name: 'Noun Vocabular 2',
        progress: '100%',
        link: 'DeckScreen',
    },
];

const GroubScreen = ({ navigation }) => {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false);
    const [modalAddDeckVisible, setModalAddDeckVisible] = useState(false);
    const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
        useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: 'English Beginner Vocabulary',
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
            <GroubModal
                popupMenuVisible={popupMenuVisible}
                setPopupMenuVisible={setPopupMenuVisible}
                modalAddDeckVisible={modalAddDeckVisible}
                setModalAddDeckVisible={setModalAddDeckVisible}
                deleteConfirmationVisible={deleteConfirmationVisible}
                setDeleteConfirmationVisible={setDeleteConfirmationVisible}
            />

            <Text style={styles.headerText}>Your Decks</Text>
            <FlatList
                key={'_'}
                keyExtractor={(deck) => '_' + deck.key}
                data={decks}
                numColumns={2}
                columnWrapperStyle={styles.listWrapper}
                renderItem={({ item }) => <Deck deck={item} link={item.link} />}
            />
            <Ionicons
                style={styles.addButton}
                name="add-circle"
                size={58}
                color={color.orange}
                onPress={() => setModalAddDeckVisible(true)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
    },
    headerText: {
        marginTop: 10,
        fontFamily: fonts.medium,
        fontSize: 18,
        color: color.gray2,
    },
    listWrapper: {
        justifyContent: 'space-between',
    },
    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});
export default GroubScreen;
