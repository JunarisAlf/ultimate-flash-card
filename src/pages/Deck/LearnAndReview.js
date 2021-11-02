import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import LearnProgressChart from './LearnProgressChart';

import color from '../../constant/color';
import fonts from '../../constant/fonts';

const LearnAndReview = () => {
    return (
        <View>
            <View style={styles.boxContainer}>
                <View>
                    <Text
                        style={{
                            ...styles.contentText,
                            fontFamily: fonts.medium,
                        }}
                    >
                        Learn
                    </Text>
                    <Text
                        style={{
                            ...styles.contentText,
                            fontFamily: fonts.light,
                        }}
                    >
                        58 of 100 card was learned
                    </Text>
                    <TouchableHighlight
                        underlayColor={'transparant'}
                        onPress={() => console.log('clicked')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Continoue Learn
                            </Text>
                            <AntDesign
                                name="arrowright"
                                size={18}
                                color={color.gray1}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <LearnProgressChart />
                </View>
            </View>

            {/* End Learn - Start Review */}

            <View
                style={{
                    ...styles.boxContainer,
                    backgroundColor: color.orange,
                }}
            >
                <View>
                    <Text
                        style={{
                            ...styles.contentText,
                            fontFamily: fonts.medium,
                        }}
                    >
                        Review
                    </Text>
                    <Text
                        style={{
                            ...styles.contentText,
                            fontFamily: fonts.light,
                        }}
                    >
                        Review 58 Card
                    </Text>
                    <TouchableHighlight
                        underlayColor={'transparant'}
                        onPress={() => console.log('clicked')}
                    >
                        <View style={styles.button}>
                            <Text
                                style={{
                                    ...styles.buttonText,
                                    color: color.orange,
                                }}
                            >
                                Start Review
                            </Text>
                            <AntDesign
                                name="arrowright"
                                size={18}
                                color={color.orange}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <MaterialIcons
                        name="repeat"
                        size={64}
                        color={color.gray6}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: color.gray1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 14,
        color: color.white,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.white,
        marginTop: 5,
        paddingHorizontal: 30,
        paddingVertical: 6,
        borderRadius: 10,
    },

    buttonText: {
        fontSize: 14,
        fontFamily: fonts.regular,
        marginRight: 10,
    },
});
export default LearnAndReview;
