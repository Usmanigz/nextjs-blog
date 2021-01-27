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
        <Link href="/blogs">
            <a className={styles.nav}>Blogs</a>
        </Link>
        <Link href="/articles">
            <a className={styles.nav}>Articles</a>
        </Link>
    </nav>
);

export default Nav;