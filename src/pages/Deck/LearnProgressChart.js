import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import color from '../../constant/color';
import fonts from '../../constant/fonts';

const LearnProgressChart = () => {
    return (
        <ProgressCircle
            style={styles.progressChart}
            progressColor={color.orange}
            backgroundColor={color.gray6}
            progress={0.63}
            strokeWidth={6}
        >
            <Text style={styles.chartInnerText}>63%</Text>
        </ProgressCircle>
    );
};

const styles = StyleSheet.create({
    progressChart: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartInnerText: {
        alignSelf: 'center',
        lineHeight: 60,
        color: color.white,
        fontFamily: fonts.regular,
        fontSize: 14,
    },
});
export default LearnProgressChart;
