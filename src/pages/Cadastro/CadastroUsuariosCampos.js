import React from 'react'
import Background from '../../components/Background'
import Input from '../../components/Input'
import InputEmpty from '../../components/InputEmpty'
import InputShort from '../../components/InputShort'

function CadastroUsuariosCampos() {
    return (
        <div Style='display:flex; justify-content:center; align-items: center'>
            <div>
                <h3 Style='color:#555; margin-left: 400px'>Cadastro de usuários</h3>
                <Background />
                <div Style='display: flex; justify-content:space-evenly'>
                    <Input />
                    <Input />
                    <Input />
                </div>
                <div Style='display: flex; justify-content:space-evenly'>
                    <Input />
                    <Input />
                </div>
                <div Style='display: flex; justify-content:space-evenly'>
                    <InputEmpty />
                    <InputShort />
                </div>
            </div>
        </div>
    )
}

export default CadastroUsuariosCampos