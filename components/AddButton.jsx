import React from 'react';
import styles from '../styles/Add.module.css';

export default function AddButton({ setClose }) {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddBtn}>
      Add New Pizza
    </div>
  );
}
