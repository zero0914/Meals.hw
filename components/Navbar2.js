import styles from './Navbar2.module.css';

export default function nav() {
  return (
    <div>
      <nav role='navigation'>
        <div className={styles.menuToggle}>
          <input type='checkbox' />

          <span></span>
          <span></span>
          <span></span>

          <ul className={styles.menu}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/project/procces'>製作過程</a>
            </li>
            <li>
              <a href='/project/w15-hw'>w15-hw</a>
            </li>
            <li>
              <a href='/project/meals'>Meals</a>
            </li>
            <li>
              <a href='/project/ooxx'>ooxx</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
