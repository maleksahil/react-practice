
import React from 'react';
import { Link } from 'react-router-dom';
import { useCrud } from '../../CrudProvider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { data, setData } = useCrud();

    const deleteItem = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const editItem = (item) => {
        navigate('/edititem', { state: item });
    };

    return (
        <div>
            <h1>This is Home page</h1>
            <ul>
                <li><Link to="/additem">Add Item</Link></li>
            </ul>
            <div className='showdata'>
                {data.length > 0 ? (
                    data.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <div className='buttons'>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                            <button onClick={() => editItem(item)}>Edit</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items added.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
