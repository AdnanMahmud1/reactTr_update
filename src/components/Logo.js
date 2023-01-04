import React from 'react';
import styles from '../assets/css/Logo.module.css';

export default function Logo() {
    return (
        <div>
            <div className={[styles.logo, 'colorLine'].join(' ')}>Toms</div>
            <div className={`border ${styles.glasses}`}>Hardware</div>
        </div>
    );
}
