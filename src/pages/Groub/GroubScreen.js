import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import color from '../../constant/color';
import decks from '../../Dummy/deckList';
import Deck from './Deck';

import { Entypo } from '@expo/vector-icons';
import NavHeader from '../../component/MicroComponent/ThreeDotNavigationHeader';
import fonts from '../../constant/fonts';
import GroubModal from './GroubModal';

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
            <View style={styles.addButton}>
                <Entypo
                    name="plus"
                    size={38}
                    color={color.white}
                    onPress={() => setModalAddDeckVisible(true)}
                />
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        right: 10,
        backgroundColor: color.orange,
        height: 48,
        width: 48,
        borderRadius: 24,
    },
});
export default GroubScreen;
