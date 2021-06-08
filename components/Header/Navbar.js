import styles from './Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navContainer}>
        {/* <input type="checkbox" checked={isChecked} onChange={changeHandler} />
        <label onClick={changeHandler} className={styles.navContainer__checkBtn}>
        </label> */}
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                
                <li className={styles.nav__listLogo}>
                    <Link href="/"><img src="/favicon.svg" alt="" /></Link>
                </li>
                
                <li className={styles.nav__listItem}>
                    <Link href="/">Home</Link>
                </li>
                
                <li className={styles.nav__listItem}>
                    <Link href="/project/procces">製作過程</Link>
                </li>

                <li className={styles.nav__listItem}>
                    Portfolio
                    <ul className={styles.nav__listItemDrop}>
                        <li><Link href="/project/meals">Project 1</Link></li>
                        <li><Link href="/">Project 2</Link></li>
                        <li><Link href="/">Project 3</Link></li>
                        
                    </ul>
                </li>
                
            </ul>
        </nav>
   </div>
) 
    
}
