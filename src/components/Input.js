import React from 'react'
import style from './Input.module.css'

function Input() {
    return (
        <div>
            <input className={style.inputStyle} type='text' name='text' placeholder='Digite aqui' />
        </div>
    )
}

export default Input