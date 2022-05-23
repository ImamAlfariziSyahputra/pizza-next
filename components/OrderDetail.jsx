import React, { useState } from 'react';
import styles from '../styles/OrderDetail.module.css';

export default function OrderDetail({ total, createOrder }) {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({
      customer,
      address,
      total,
      method: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>

        <div className={styles.item}>
          <label htmlFor="">Name Surname</label>
          <input
            type="text"
            placeholder="John Doe"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="">Address</label>
          <textarea
            rows={5}
            placeholder="Jl. Kebon Jeruk No.1"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className={styles.btn} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
}
