import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { selectText } from '../store/text/selectors';
import { marked } from 'marked';

const Previewer = () => {
    const text = useSelector(selectText);
    const renderedText = marked.parse(text);
    const previewTextRef = useRef(null);
    

    useEffect(() => {
        if (previewTextRef.current){
            previewTextRef.current.innerHTML = renderedText;
        }
    }, [renderedText]);

    return (
        <div >
            <h2>Previewer</h2>
            <div ref={previewTextRef} id='preview'>{renderedText}</div>
        </div>
    );
};

export default Previewer;
