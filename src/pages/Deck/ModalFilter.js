import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Confirmation from '../../component/ModalThemplate/Confirmation';
import CheckBox from '../../component/input/CheckBox';
import Button from '../../component/input/Button';
import InputDropDown from '../../component/input/InputDropDown';

import color from '../../constant/color';
import fonts from '../../constant/fonts';
import sortsCons from '../../constant/sorts';

const ModalFilter = (props) => {
    const [filters, setFilters] = useState(props.filters); // local data for UI
    const [sorts, setSorts] = useState(sortsCons); // local data for UI

    const pressHandler = (id) =>
        filters.map((filter) => ({
            ...filter,
            selected: id === filter.id ? !filter.selected : filter.selected,
        }));
    const selectPressHandler = (id) =>
        sorts.map((sort) => ({
            ...sorts,
            selected: id === sort.id ? true : false,
        }));
    return (
        <Confirmation {...props}>
            <Text style={styles.headingText}>Show Filter</Text>
            <View style={styles.checkBoxField}>
                {filters.map((filter) => (
                    <CheckBox
                        key={filter.id}
                        id={filter.id}
                        label={filter.label}
                        checked={filter.selected}
                        setCheckBox={setFilters}
                        pressHandler={pressHandler}
                    />
                ))}
            </View>

            <InputDropDown
                datas={sorts}
                label="Sort"
                RdButton={false}
                DefaultVal={props.sort}
                setSorts={setSorts}
                handler={selectPressHandler}
            />
            <Button
                label="APPLY"
                onPressHandler={() => {
                    props.setFilters(filters);
                    props.setModalFilterVisible(false);
                }} //change real filters data
            />
        </Confirmation>
    );
};

const styles = StyleSheet.create({
    headingText: {
        fontFamily: fonts.medium,
        fontSize: 16,
        color: color.blueGray,
    },
    checkBoxField: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
export default ModalFilter;
