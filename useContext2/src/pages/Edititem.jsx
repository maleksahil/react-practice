
import React, { useEffect, useState } from 'react';
import { useCrud } from '../../CrudProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const Edititem = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data, setData } = useCrud();
    const [text, setText] = useState('');
    const [itemId, setItemId] = useState(null);

    useEffect(() => {
        if (location.state) {
            setText(location.state.name);
            setItemId(location.state.id);
        }
    }, [location.state]);

    const edit = () => {
        setData(data.map(item => (item.id === itemId ? { ...item, name: text } : item)));
        navigate('/');
    };

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={edit}>Edit</button>
        </div>
    );
};

export default Edititem;