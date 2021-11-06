import React from 'react';
import SlideUpMenuThemplate from '../../component/ModalThemplate/SlideUpMenu';

import InputText from '../../component/input/InputText';
import Button from '../../component/input/Button';

const ModalEditDeck = (props) => {
    return (
        <SlideUpMenuThemplate {...props}>
            <InputText label="Name" value={props.value} />
            <Button label="SAVE" />
        </SlideUpMenuThemplate>
    );
};

export default ModalEditDeck;
