"use client"
import React, { createContext, useState } from 'react';
export const CentralData = createContext('')


function context(props) {
    const [search, setSearch] = useState([]);
    const [input, setInput] = useState([]);
    const [load, setLoad] = useState(1);
    return (
        <>
            <CentralData.Provider value={[search, setSearch,input,setInput,load,setLoad]}>
                {props.children}
            </CentralData.Provider>
        </>
    );
}

export default context;