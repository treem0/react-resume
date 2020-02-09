import React from 'react';
import LeftColumn from './leftColoumn/LeftColumn';
import RightColumn from './rightColumn/rightColoumn';
import Header from './header/Header';
import styles from './App.css';

export default function App() {
  return (
    <>
      <main className={styles.gridContainer}>
        <Header className={styles.Header1} />
        <LeftColumn className={styles.leftColumn} />
        <RightColumn className={styles.rightColumn} />
      </main>
    </>
  );
}
