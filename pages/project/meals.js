import styles from '../../styles/meals.module.css';
import Head from 'next/head';
import mealData from './meal-data'

export default function meals() {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        />
        <title>Meal</title>
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
            <i className='fas fa-random'></i>
          </button>
        </div>
        <div id='result-heading' className={styles.title__search}>
          <h1>Search Results for ' beef ' :</h1>
        </div>
        <div id='meals' className={styles.gallery}>
          {mealData.map((meal)=>(
              <Meal key={meal.id} name={meal.name} image={meal.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Meal({id, image , name} ) {
    return(
        <div className={styles['gallery-card']}>
            <img
              className={styles['gallery-card__img']}
              src={image}
              alt={name}
            />
            <div
              className={styles['gallery-card__details']}
              data-mealid={id}
            >
              <h2>{name}</h2>
            </div>
          </div>
    )
}