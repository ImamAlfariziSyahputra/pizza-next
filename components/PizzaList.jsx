import React from 'react';
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

export default function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
        blanditiis magnam illum placeat ex harum. Asperiores dolor ipsa
        voluptates voluptatibus?
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}
