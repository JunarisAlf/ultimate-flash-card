import React from 'react';
import SlideUpMenuThemplate from '../../component/ModalThemplate/SlideUpMenu';

import InputText from '../../component/input/InputText';
import Button from '../../component/input/Button';

const ModalAddDeck = (props) => {
    return (
        <SlideUpMenuThemplate {...props}>
            <InputText label="Name" />
            <Button label="SAVE" />
        </SlideUpMenuThemplate>
    );
};

export default ModalAddDeck;
