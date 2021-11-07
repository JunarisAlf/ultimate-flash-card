import React, { useState, useRef, useEffect } from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import color from '../../constant/color';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import fonts from '../../constant/fonts';

const Card = ({ card, flipedAll, setCardMenuVisible }) => {
    const [fliped, setFliped] = useState(flipedAll);
    // useEffect(() => {
    //     // console.log('EFFECT');
    //     flipAnimation();
    // }, [fliped]);

    const data = fliped ? card.back : card.front;
    const value = useRef(new Animated.Value(0)).current;
    const flipAnimation = () => {
        Animated.timing(value, {
            toValue: 180,
            duration: 300,
            useNativeDriver: 'false',
        }).start(() => value.setValue(0));
    };
    const rotate = value.interpolate({
        inputRange: [0, 180, 180],
        outputRange: ['0deg', '180deg', '0deg'],
        extrapolateRight: 'clamp',
    });
    return (
        <View style={styles.container}>
            {card.status === 'none' && (
                <View
                    style={{
                        ...styles.cardStatus,
                        backgroundColor: color.white,
                    }}
                />
            )}
            {card.status === 'easy' && (
                <View
                    style={{
                        ...styles.cardStatus,
                        backgroundColor: color.green,
                    }}
                />
            )}
            {card.status === 'hard' && (
                <View
                    style={{
                        ...styles.cardStatus,
                        backgroundColor: color.yellow,
                    }}
                />
            )}
            {card.status === 'fail' && (
                <View
                    style={{ ...styles.cardStatus, backgroundColor: color.red }}
                />
            )}

            <TouchableOpacity
                activeOpacity={0.2}
                style={{ flex: 1 }}
                onPress={() => {
                    flipAnimation();
                    setFliped(!fliped);
                }}
            >
                <Animated.View
                    style={[
                        styles.cardContainer,
                        {
                            backgroundColor: fliped
                                ? color.darkBlue
                                : color.blue,
                            transform: [
                                {
                                    rotateX: rotate,
                                },
                            ],
                        },
                    ]}
                >
                    <Image style={styles.cardImage} source={card.image} />
                    <View style={[styles.cardTextContainer]}>
                        <Text style={styles.cardPrimaryText}>
                            {data.primaryText}
                        </Text>
                        <Text style={styles.cardSecondaryText}>
                            {data.secondaryText}
                        </Text>
                    </View>
                    <View style={[styles.cardRightSide]}>
                        <Entypo
                            name="dots-three-vertical"
                            size={14}
                            color={color.white}
                            onPress={() => setCardMenuVisible(true)}
                        />
                        <TouchableOpacity style={styles.circleIconBg}>
                            <MaterialIcons
                                name="volume-up"
                                size={22}
                                color={fliped ? color.darkBlue : color.blue}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardStatus: {
        height: '80%',
        width: 8,
        borderRadius: 5,
        marginRight: 5,
    },
    cardContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        borderRadius: 10,
        backgroundColor: color.blue,
    },
    cardImage: {
        marginLeft: 10,
        width: 70,
        height: 73,
        borderRadius: 10,
        backgroundColor: color.gray6,
    },
    cardTextContainer: {
        flexGrow: 1,
        alignSelf: 'flex-start',
        padding: 5,
    },
    cardPrimaryText: {
        fontFamily: fonts.medium,
        fontSize: 18,
        color: color.white,
    },
    cardSecondaryText: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: color.white,
    },
    cardRightSide: {
        height: '100%',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    circleIconBg: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Card;
