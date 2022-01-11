import React from 'react'
import Button from 'react-bootstrap/Button';                //Importei o Button do Bootstrap Oficial.

function ButtonComponentBootstrap() {
    return (
        <div>
            <Button variant="success" size="lg" Style="border: 2px solid #000; margin-bottom: 1rem">Cadastrar</Button>
        </div>
    )
}

export default ButtonComponentBootstrap