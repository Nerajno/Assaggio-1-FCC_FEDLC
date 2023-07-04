import React from 'react';
import { useSelector } from 'react-redux';
import { selectText } from '../store/text/selectors';

const Previewer = () => {
    const text = useSelector(selectText);
    return (
        <div id='preview'>
            <h2>Previewer</h2>
            <p>{text}</p>
        </div>
    );
};

export default Previewer;
