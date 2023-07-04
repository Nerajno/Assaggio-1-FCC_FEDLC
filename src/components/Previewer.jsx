import React from 'react';
import { useSelector } from 'react-redux';
import { selectText } from '../store/text/selectors';
import { marked } from 'marked';

const Previewer = () => {
    const text = useSelector(selectText);
    return (
        <div id='preview'>
            <h2>Previewer</h2>
            <p>{marked.parse(text)}</p>
        </div>
    );
};

export default Previewer;
