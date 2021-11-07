import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SlideUpMenuThemplate from '../../component/ModalThemplate/SlideUpMenu';

import Button from '../../component/input/Button';

const ModalCardMenu = (props) => {
    const navigation = useNavigation();
    return (
        <SlideUpMenuThemplate {...props}>
            <Button
                onPressHandler={() => {
                    props.setVisible();
                    navigation.navigate('AddCardScreen');
                }}
                additionStyle={{ marginVertical: 7 }}
                label="EDIT"
            />
            <Button
                onPressHandler={() => props.setDeleteConfirmation(true)}
                additionStyle={{
                    marginVertical: 7,
                }}
                label="DELETE"
            />
        </SlideUpMenuThemplate>
    );
};

export default ModalCardMenu;
