import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

const StoreProvider = ({ children }) => {
    const [token, setToken] = useStorage('token');
    const [nomeUsuario, setNomeUsuario] = useStorage('nomeUsuario');


    return (
        <Context.Provider
            value={{
                token,
                setToken,
                nomeUsuario,
                setNomeUsuario,
            }}
        >
            {children}
        </Context.Provider>
    )
}


export default StoreProvider;