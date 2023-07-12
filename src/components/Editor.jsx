import { useDispatch } from 'react-redux';
import { updateText } from '../store/text/slice';

const Editor = ({disDispatch}) => {
     const dispatch = useDispatch();
    //  const placeholder =

    const handleChange = (e) => {
        const newText = e.target.value;
        dispatch(updateText(newText));
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
