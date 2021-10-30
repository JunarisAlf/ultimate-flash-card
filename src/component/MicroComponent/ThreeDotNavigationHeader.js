import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ThreeDotNavigationHeader = ({ pressAction }) => {
    return (
        <Entypo
            onPress={() => pressAction(true)}
            name="dots-three-vertical"
            size={16}
            color="black"
        />
    );
};

export default ThreeDotNavigationHeader;
