import React, { createContext, useContext, useState } from 'react';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
    const [data, setData] = useState([]); 

    return (
        <CrudContext.Provider value={{ data, setData }}>
            {children}
        </CrudContext.Provider>
    );
};

export default CrudProvider;

export const useCrud = () => {
    return useContext(CrudContext);
};