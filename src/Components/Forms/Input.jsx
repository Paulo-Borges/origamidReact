import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, placeholder, name }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} styles={styles.label}>{label}</label>
            <input id={name} name={name} className={styles.input} type={type} placeholder={placeholder}/>
            <p className={styles.error}>Error</p>
        </div>
        
    )
}

export default Input;