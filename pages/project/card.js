import styles from '../../styles/card.module.css';
import Layout from '../../components/Layout2/Layout';
export default function Card() {
  return (
      <Layout>
    <div>
      <div className={styles.main}>
        <h1>Card</h1>
        <ul className={styles.cards}>
        <li className={styles.cards_item}>
            <div className={styles.card}>
            <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=10"/></div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  MealDB
                </p>
                <button className={styles.btn}><a href='./meals'>Read More</a></button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.card}>
            <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=14"/></div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  w15-hw
                </p>
                <button className={styles.btn}><a href='./w15-hw'>Read More</a></button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.card}>
            <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=11"/></div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  OOXX
                </p>
                <button className={styles.btn}><a href='./ooxx'>Read More</a></button>
              </div>
            </div>
          </li>
          <li className={styles.cards_item}>
            <div className={styles.card}>
            <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=17"/></div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Card Grid Layout</h2>
                <p className={styles.card_text}>
                  Procces
                </p>
                <button className={styles.btn}><a href='./procces'>Read More</a></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </Layout>
  );
}
