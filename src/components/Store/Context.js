import { createContext } from 'react';

const StoreContext = createContext({
    token: null,
    setToken: () => { },
    user: null,
    setUser: () => { },
    planta: null,
    setPlanta: () => { },
    pais: null,
    setPais: () => { },
    motorista: null,
    setMotorista: () => [{}],
    tipoOrdem: null,
    setTipoOrdem: () => { },
    veiculos: null,
    setVeiculos: () => [],
    veiculosDois: null,
    setVeiculosDois: () => [],
    tipoPlanta: null,
    setTipoPlanta: () => { },
    produto: null,
    setProduto: () => { },
    porcentagem: null,
    setPorcentagem: () => { },
    relViagem: null,
    setRelViagem: () => { },
    idOpDetalhada: null,
    setIdOpDetalhada: () => { },
    nomeOp: null,
    setNomeOp: () => { },
});

export default StoreContext;