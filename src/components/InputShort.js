import React from 'react'
import style from './InputShort.module.css'

function InputShort() {
    return (
        <div Style='display:flex'>
            <input className={style.inputShort} type='text' name='text' placeholder='OFF' />
            <div className={style.inputShortSpan}></div>
        </div>
    )
}

export default InputShort