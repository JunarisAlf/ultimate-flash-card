import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import NavHeader from '../../component/MicroComponent/ThreeDotNavigationHeader';
import DeckModal from './DeckModal';
import LearnAndReview from './LearnAndReview';
import Card from './Card';

import fonts from '../../constant/fonts';
import color from '../../constant/color';
import cards from '../../Dummy/cardList';

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
        <ScrollView style={styles.container}>
            <DeckModal
                popupMenuVisible={popupMenuVisible}
                setPopupMenuVisible={setPopupMenuVisible}
                modalAddDeckVisible={modalAddDeckVisible}
                setModalAddDeckVisible={setModalAddDeckVisible}
                deleteConfirmationVisible={deleteConfirmationVisible}
                setDeleteConfirmationVisible={setDeleteConfirmationVisible}
            />
            <LearnAndReview />

            <View style={styles.heading}>
                <Text style={styles.yourCardsText}>
                    Your Cards&nbsp;
                    <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
                        (100)
                    </Text>
                </Text>
                <TouchableOpacity style={styles.flipContainer}>
                    <Text style={styles.flipText}>Flip</Text>
                    <MaterialIcons name="flip" size={16} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <AntDesign name="search1" size={16} color={color.gray4} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Card..."
                    />
                </View>

                <TouchableOpacity style={styles.filter}>
                    <MaterialIcons name="tune" size={24} color={color.gray3} />
                </TouchableOpacity>
            </View>

            <FlatList
                key={'_'}
                keyExtractor={(card) => '_' + card.key}
                data={cards}
                renderItem={({ item }) => <Card card={item} />}
                nestedScrollEnabled={true}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
    },

    heading: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    yourCardsText: {
        fontFamily: fonts.medium,
        color: color.gray2,
        fontSize: 18,
    },
    flipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flipText: {
        marginRight: 5,
        fontFamily: fonts.regular,
        color: color.gray2,
        fontSize: 14,
    },

    searchContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 100,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 25,
        backgroundColor: color.gray6,
    },
    searchInput: {
        width: '100%',
        marginLeft: 10,
        lineHeight: 24,
        fontFamily: fonts.regular,
        fontSize: 14,
        color: color.gray2,
    },
    filter: {
        flex: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default GroubScreen;
