import React, { useState } from 'react';
import styles from '../styles/Add.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Add({ setClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;

    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uploads');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/dfj60ra6e/image/upload',
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post('http://localhost:3000/api/products', newProduct);
      setClose(true);
    } catch (err) {
      console.log('err => ', err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add New Pizza</h1>

        <div className={styles.item}>
          <label htmlFor="img" className={styles.label}>
            Choose an image
          </label>
          <input
            type="file"
            id="img"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="desc" className={styles.label}>
            Desc
          </label>
          <textarea
            rows={4}
            type="text"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              type="number"
              id="prices"
              placeholder="Small"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              id="prices"
              placeholder="Medium"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              type="number"
              id="prices"
              placeholder="Large"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Extra</label>

          <div className={styles.extra}>
            <input
              type="text"
              name="text"
              placeholder="Item"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={handleExtraInput}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={handleExtraInput}
            />
            <button className={styles.extraBtn} onClick={handleExtra}>
              Add
            </button>
          </div>

          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>

        <button className={styles.addBtn} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}
