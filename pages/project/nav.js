import styles from '../../styles/nav.module.css';

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
            <a href='#'>
              <li>Home</li>
            </a>
            <a href='#'>
              <li>About</li>
            </a>
            <a href='#'>
              <li>Info</li>
            </a>
            <a href='#'>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
