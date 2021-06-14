import styles from '../../styles/card2.module.css';
import Layout from '../../components/Layout2/Layout';
export default function card2() {
  return (
    <Layout>
      <div>
        <section className={styles['cards-wrapper']}>
          <div className={styles['card-grid-space']}>
            <div className={styles.num}>01</div>
            <a className={styles.card} href='./meals'>
              <div>
                <h1>MealDB</h1>
                <p></p>
                <div className={styles.date}>6/15</div>
                <div className={styles.tag}>
                  <div className={styles.tag}>READ</div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles['card-grid-space']}>
            <div className={styles.num}>02</div>
            <a className={styles.card} href='./ooxx'>
              <div>
                <h1>OOXX</h1>
                <p></p>
                <div className={styles.date}>6/15</div>
                <div className={styles.tag}>
                  <div className={styles.tag}>READ</div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles['card-grid-space']}>
            <div className={styles.num}>03</div>
            <a className={styles.card} href='./procces'>
              <div>
                <h1>Procces</h1>
                <p></p>
                <div className={styles.date}>6/15</div>
                <div className={styles.tag}>
                  <div className={styles.tag}>READ</div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles['card-grid-space']}>
            <div className={styles.num}>04</div>
            <a className={styles.card} href='./w15-hw'>
              <div>
                <h1>w15-hw</h1>
                <p></p>
                <div className={styles.date}>6/15</div>
                <div className={styles.tag}>
                  <div className={styles.tag}>READ</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
