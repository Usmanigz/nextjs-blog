import Link from 'next/link'
import styles from './nav.module.css'

const Nav =() => (
    <nav>
        <Link href="/">
            <a className={styles.nav}>Home</a>
        </Link>
        <Link href="/about">
            <a className={styles.nav}>About</a>
        </Link>
        <Link href="/posts">
            <a className={styles.nav}>Blog</a>
        </Link>
        <Link href="/recipies">
            <a className={styles.nav}>Recipies</a>
        </Link>
    </nav>
);

export default Nav;