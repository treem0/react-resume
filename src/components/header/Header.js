import React from 'react';
import { header } from '../../../resume.json';
import styles from './header.css';

const Header = () => (
  <section className={styles.Header}>
    <h1>{header.name}</h1>
    <h2>{header.title}</h2>
    <p>{header.city}</p>
    <p>{header.github}</p>
    <p>{header.linkedin}</p>
  </section>
);

export default Header;
