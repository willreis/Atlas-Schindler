import React from 'react'
import style from './InputEmpty.module.css'
import ArrowDown from './ArrowDown'
import styles from './ArrowDown.module.css'

function InputEmpty() {
    return (
        <div Style='display:flex'>
            <input className={style.inputEmpty} type='text' name='text' placeholder='Digite aqui' />
            <span className={styles.ArrowDownClassSpan}><ArrowDown /></span>
        </div>
    )
}

export default InputEmpty