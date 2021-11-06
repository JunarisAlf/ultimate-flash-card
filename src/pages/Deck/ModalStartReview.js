import React from 'react';
import SlideUpMenuThemplate from '../../component/ModalThemplate/SlideUpMenu';

import Button from '../../component/input/Button';

const ModalStartReview = (props) => {
    return (
        <SlideUpMenuThemplate {...props}>
            <Button
                onPressHandler={() => console.log('clicked')}
                additionStyle={{ marginVertical: 7 }}
                label="Continoue Last Review (66/100)"
            />
            <Button
                onPressHandler={() => console.log('clicked')}
                additionStyle={{ marginVertical: 7 }}
                label="Start (Front Side On Top)"
            />
            <Button
                onPressHandler={() => console.log('clicked')}
                additionStyle={{ marginVertical: 7 }}
                label="Start (Back Side On Top)"
            />
        </SlideUpMenuThemplate>
    );
};

export default ModalStartReview;
