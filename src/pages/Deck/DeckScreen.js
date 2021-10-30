import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import NavHeader from '../../component/MicroComponent/ThreeDotNavigationHeader';

const GroubScreen = ({ navigation }) => {
    const [popupMenuVisible, setPopupMenuVisible] = useState(false);

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

    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
    },
});
export default GroubScreen;
