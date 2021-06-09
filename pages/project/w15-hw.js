import styles from '../../styles/meals.module.css';
import Head from 'next/head';
import Layout from '../../components/Layout2/Layout';

export default function w15hw() {
  return (
    <Layout>
      <div>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          />
          <title>w15-hw</title>
        </Head>
        <div className={styles.container}>
          <h1 className={styles.title__main}>Meal Finder</h1>
          <div className={styles['flex-box']}>
            <form id='submit' className={styles['flex-box']}>
              <input
                type='text'
                id='search'
                placeholder='Search for meals or keywords'
                className={styles.input}
              />
              <button className={styles.btn__search} type='submit'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            <button className={styles.btn__random} id='random'>
              <i className='styles.fas fa-random'></i>
            </button>
          </div>
          <div id="result-heading" className={styles.title__search}><h1>Search Results for ' beef ' :</h1></div>
          <div id="meals" className={styles.gallery}>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/1529444830.jpg" alt="Beef Lo Mein"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Beef Lo Mein</h2>
                  </div>
            </div>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/1529443236.jpg" alt="Szechuan Beef"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Szechuan Beef</h2>
                  </div>
            </div>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg" alt="Beef Wellington"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Beef Wellington</h2>
                  </div>
            </div>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/svprys1511176755.jpg" alt="Beef stroganoff"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Beef stroganoff</h2>
                  </div>
            </div>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg" alt="Minced Beef Pie"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Minced Beef Pie</h2>
                  </div>
            </div>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg" alt="Beef Bourguignon"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Beef Bourguignon</h2>
                  </div>
            </div>
            <div class="gallery-card">
                  <img className={styles['gallery-card__img']} src="https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg" alt="Beef Sunday Roast"/>
                  <div className={styles['gallery-card__details']} data-mealid="52952"> 
                      <h2>Beef Sunday Roast</h2>
                  </div>
            </div>

          </div>
          </div>
      </div>
    </Layout>
  );
}
