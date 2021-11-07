import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { v4 as uuid } from 'uuid';

import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import NavHeader from '../../component/MicroComponent/ThreeDotNavigationHeader';
import DeckModal from './DeckModal';
import LearnAndReview from './LearnAndReview';
import Card from './Card';
import CardStatus from './CardStatus';

import fonts from '../../constant/fonts';
import color from '../../constant/color';
import filtersConst from '../../constant/filters';
import cards from '../../Dummy/cardList';

const GroubScreen = ({ navigation }) => {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false);
    const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
        useState(false);
    const [deleteCardConfirmationVisible, setDeleteCardConfirmationVisible] =
        useState(false);
    const [editDeckVisible, setEditDeckVisible] = useState(false);
    const [modalFilterVisible, setModalFilterVisible] = useState(false);
    const [startReviewVisible, setStartReviewVisible] = useState(false);
    const [flipedAll, setFlipedAll] = useState(false);
    const [cardMenuVisible, setCardMenuVisible] = useState(false);
    const [filters, setFilters] = useState(filtersConst);
    const [sort, setSort] = useState('ASC_DATE_CR');

    useEffect(() => {
        navigation.setOptions({
            title: 'Daily Word Vocabullary',
            headerRight: () => <NavHeader pressAction={setPopupMenuVisible} />,
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <DeckModal
                popupMenuVisible={popupMenuVisible}
                setPopupMenuVisible={setPopupMenuVisible}
                deleteConfirmationVisible={deleteConfirmationVisible}
                setDeleteConfirmationVisible={setDeleteConfirmationVisible}
                editDeckVisible={editDeckVisible}
                setEditDeckVisible={setEditDeckVisible}
                startReviewVisible={startReviewVisible}
                setStartReviewVisible={setStartReviewVisible}
                filters={filters}
                setFilters={setFilters}
                modalFilterVisible={modalFilterVisible}
                setModalFilterVisible={setModalFilterVisible}
                sort={sort}
                setSort={setSort}
                cardMenuVisible={cardMenuVisible}
                setCardMenuVisible={setCardMenuVisible}
                deleteCardConfirmationVisible={deleteCardConfirmationVisible}
                setDeleteCardConfirmationVisible={
                    setDeleteCardConfirmationVisible
                }
            />

            <LearnAndReview setStartReviewVisible={setStartReviewVisible} />

            <View style={styles.heading}>
                <Text style={styles.yourCardsText}>
                    Your Cards&nbsp;
                    <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
                        ({cards.length})
                    </Text>
                </Text>
                <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={() => setFlipedAll(!flipedAll)}
                >
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

                <TouchableOpacity
                    style={styles.filter}
                    onPress={() => setModalFilterVisible(true)}
                >
                    <MaterialIcons name="tune" size={24} color={color.gray3} />
                </TouchableOpacity>
            </View>

            <CardStatus />
            <FlatList
                style={{
                    width: '100%',
                    height: 600,
                }}
                keyExtractor={(card) => '_' + card.key + uuid()}
                data={cards}
                renderItem={({ item }) => (
                    <Card
                        card={item}
                        flipedAll={flipedAll}
                        setCardMenuVisible={setCardMenuVisible}
                    />
                )}
                nestedScrollEnabled={true}
            />
            <View style={styles.addButton}>
                <Entypo
                    name="plus"
                    size={38}
                    color={color.white}
                    onPress={() => navigation.navigate('AddCardScreen')}
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
