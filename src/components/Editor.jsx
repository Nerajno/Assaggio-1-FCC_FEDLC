import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { store } from '../store/reducers';

const Editor = ({disDispatch}) => {
     const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        dispatch({type: 'UPDATE_TEXT', payload: newText});
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
