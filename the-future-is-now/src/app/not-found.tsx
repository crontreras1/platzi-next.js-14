import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function NotFound () {
    return (
        <main className={ styles.NotFound }>
            <h1 className={ styles.NotFound__title}>404</h1>

            <Image 
                src='/images/404.png'
                alt="404"
                width={ 300 }
                height={ 300 }
            />

            <h2 className={ styles.NotFound__subtitle }>Something went wrong</h2>

            <p className={ styles.NotFound__description }>But our shop is open 24/7</p>

            <Link href='/store' className={ styles.NotFound__link}>Let´s get something</Link>
        </main>
    )
}