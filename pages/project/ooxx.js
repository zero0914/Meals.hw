import styles from '../../styles/ooxx.module.css';
import Layout from '../../components/Layout2/Layout';

export default function ooxx() {
  return (
    <Layout>
    <div>
      <div className={styles.container}>
        <header>
          <h1>Tic Tac Toe</h1>
        </header>
        <ul className={styles.board}>
          <li className={styles.x}>X</li>
          <li className={styles.o}>O</li>
          <li className={styles.x}>X</li>
          <li className={styles.o}>O</li>
          <li className={styles.o}>O</li>
          <li className={styles.x}>X</li>
          <li>+</li>
          <li className={styles.o}>O</li>
          <li>+</li>
        </ul>
        <footer>
          <button className={styles.reset}>Reset Game</button>
        </footer>
      </div>
    </div>
    </Layout>
  );
}
