import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Next</title>
        <meta name="description" content="Pizza Web using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}