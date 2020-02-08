import React from 'react';
import LeftColumn from './leftColoumn/LeftColumn';
import RightColumn from './rightColumn/rightColoumn';
import Header from './header/Header';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.gridContainer}>
      <Header className={styles.header} />
      <LeftColumn className={styles.leftColumn} />
      <RightColumn className={styles.rightColumn} />
    </div>
  );
}
  