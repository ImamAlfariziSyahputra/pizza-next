import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });

      router.push('/admin');
    } catch (err) {
      console.log('err => ', err.message);
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className="">Admin Dashboard</h1>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleClick} className={styles.btn}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials</span>}
      </div>
    </div>
  );
}
