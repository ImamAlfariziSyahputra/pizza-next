import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE PIZZA NEXT, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            Jalan Kenanga Baru, 105.
            <br /> Depok, Jawa Barat
            <br /> 021 234 567
          </p>
          <p className={styles.text}>
            Jalan Raya Bogor, 324.
            <br /> Depok, Jawa Barat
            <br /> 021 234 567
          </p>
          <p className={styles.text}>
            Jalan Raya Margonda, 594.
            <br /> Depok, Jawa Barat
            <br /> 021 234 567
          </p>
          <p className={styles.text}>
            Jalan Ir. Juanda, 140.
            <br /> Depok, Jawa Barat
            <br /> 021 234 567
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            SENIN - JUMAT
            <br /> 08.00 - 22.00
          </p>
          <p className={styles.text}>
            SABTU - MINGGU
            <br /> 11.00 - 24.00
          </p>
        </div>
      </div>
    </div>
  );
}
