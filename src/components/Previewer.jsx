import React from 'react';
import { useSelector } from 'react-redux';


const Previewer = () => {
    const text = useSelector((state) => state.text);
    return (
    <div id='preview'>
        <h2>Previewer</h2>
        <p>(text)</p>
    </div>
    )
}

export default Previewer;
