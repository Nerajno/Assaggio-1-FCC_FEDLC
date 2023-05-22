import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../store/reducers';

const Editor = ({disDispatch}) => {
    const [text, setText] = useState(store.getState().text);

    const handleChange = (e) => {
        setText(e.target.value);
        disDispatch({type: 'UPDATE_TEXT', 
        text: e.target.value});
    }
    
    return (
        <div id='editorComponent'>
        <h2>Editor</h2>
        <textarea name="" id="editor" cols="30" rows="10" onChange={handleChange}>
        </textarea>
        </div>
    )
}

export default Editor;