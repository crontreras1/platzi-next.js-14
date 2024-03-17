import styles from './Footer.module.sass'

export const Footer = () => {
    return (
        <footer className={ styles.Footer }>
            <p>Mundo Futuro © {new Date().getFullYear() }</p>
        </footer>
    )
}