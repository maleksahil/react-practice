
import React, { useState } from 'react';
import { useCrud } from '../../CrudProvider';
import { useNavigate } from 'react-router-dom';

const Additem = () => {
    const { data, setData } = useCrud();
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const add = () => {
        if (text.trim()) {
            const newItem = { id: Date.now(), name: text };
            setData([...data, newItem]); // Add new item to the array
            setText('');
            navigate('/');
        }
    };

    return (
        <div>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={add}>Submit</button>
        </div>
    );
};

export default Additem;