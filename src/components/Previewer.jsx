import React from 'react';
import { useSelector } from 'react-redux';
import { selectText } from '../store/text/selectors';
import { marked } from 'marked';

const Previewer = () => {
    const text = useSelector(selectText);
    const renderedText = marked.parse(text);
    return (
        <div id='preview'>
            <h2>Previewer</h2>
            <div>{renderedText}</div>
        </div>
    );
};

export default Previewer;
