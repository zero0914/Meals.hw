import styles from './Navbar.module.css';


export default function Navbar() {
    return (
        
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.logo}>FINAL</h1>
                <input type="checkbox" id="nav-toggle" className={styles["nav-toggle"]}/>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/project/procces">製作過程</a></li>
                        <li><a href="/project/w15-hw">w15-hw</a></li>
                        <li><a href="/project/meals">Meals</a></li>
                        <li><a href="/project/ooxx">ooxx</a></li>
                    </ul>
                </nav>
                <label for="nav-toggle" className={styles["nav-toggle-label"]}> 
                <span></span>
                </label>
            </header>
            
        </div>
    )
}
